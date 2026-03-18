'use client';

import { cn } from '../../lib/utils';

import * as React from 'react';

import { cva } from 'class-variance-authority';
import {
  Maximize,
  Minimize,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from 'lucide-react';

/**
 * Extracts YouTube ID from various YouTube URL formats.
 */
const getYoutubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url?.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const videoPlayerVariants = cva(
  'relative w-full bg-black rounded-card overflow-hidden group shadow-2xl',
  {
    variants: {
      size: {
        sm: 'max-w-md',
        default: 'max-w-2xl',
        lg: 'max-w-4xl',
        full: 'w-full',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const VideoPlayer = React.forwardRef(
  ({ className, size, src, poster, showControls = true, autoHide = true, ...props }, ref) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(1);
    const [isMuted, setIsMuted] = React.useState(false);
    const [isFullscreen, setIsFullscreen] = React.useState(false);
    const [showControlsState, setShowControlsState] = React.useState(true);

    const videoRef = React.useRef(null);
    const containerRef = React.useRef(null);
    const hideControlsTimeoutRef = React.useRef(null);

    React.useImperativeHandle(ref, () => videoRef.current, []);

    const youtubeId = getYoutubeId(src);

    const formatTime = (time) => {
      if (isNaN(time)) return '0:00';
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = Math.floor(time % 60);

      if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`;
      }
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const togglePlay = React.useCallback(() => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    }, [isPlaying]);

    const toggleMute = React.useCallback(() => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }, [isMuted]);

    const handleVolumeChange = (e) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (videoRef.current) {
        videoRef.current.volume = newVolume;
        setIsMuted(newVolume === 0);
      }
    };

    const handleSeek = (e) => {
      const newTime = parseFloat(e.target.value);
      setCurrentTime(newTime);
      if (videoRef.current) {
        videoRef.current.currentTime = newTime;
      }
    };

    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        containerRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    };

    const skip = React.useCallback(
      (seconds) => {
        if (videoRef.current) {
          videoRef.current.currentTime = Math.max(0, Math.min(duration, currentTime + seconds));
        }
      },
      [currentTime, duration]
    );

    const resetHideControlsTimeout = React.useCallback(() => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }

      if (autoHide && isPlaying) {
        hideControlsTimeoutRef.current = setTimeout(() => {
          setShowControlsState(false);
        }, 3000);
      }
    }, [autoHide, isPlaying]);

    const handleMouseMove = () => {
      setShowControlsState(true);
      resetHideControlsTimeout();
    };

    React.useEffect(() => {
      if (youtubeId) return;

      const video = videoRef.current;
      if (!video) return;

      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
      };

      const handlePlay = () => {
        setIsPlaying(true);
        resetHideControlsTimeout();
      };

      const handlePause = () => {
        setIsPlaying(false);
        setShowControlsState(true);
        if (hideControlsTimeoutRef.current) {
          clearTimeout(hideControlsTimeoutRef.current);
        }
      };

      const onVolumeChange = () => {
        setVolume(video.volume);
        setIsMuted(video.muted);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('volumechange', onVolumeChange);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('volumechange', onVolumeChange);
        if (hideControlsTimeoutRef.current) {
          clearTimeout(hideControlsTimeoutRef.current);
        }
      };
    }, [youtubeId, resetHideControlsTimeout]);

    React.useEffect(() => {
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };

      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
    }, []);

    React.useEffect(() => {
      if (youtubeId) return;

      const handleKeyDown = (e) => {
        if (!containerRef.current?.contains(document.activeElement)) return;

        switch (e.key) {
          case ' ':
          case 'k':
            e.preventDefault();
            togglePlay();
            break;
          case 'm':
            e.preventDefault();
            toggleMute();
            break;
          case 'f':
            e.preventDefault();
            toggleFullscreen();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            skip(-10);
            break;
          case 'ArrowRight':
            e.preventDefault();
            skip(10);
            break;
          case 'ArrowUp':
            e.preventDefault();
            setVolume((prev) => Math.min(1, prev + 0.1));
            break;
          case 'ArrowDown':
            e.preventDefault();
            setVolume((prev) => Math.max(0, prev - 0.1));
            break;
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [youtubeId, togglePlay, toggleMute, toggleFullscreen, skip]);

    if (youtubeId) {
      return (
        <div className={cn(videoPlayerVariants({ size }), 'aspect-video', className)}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title="YouTube video player"
            className="rounded-card h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      );
    }

    return (
      <div
        ref={containerRef}
        className={cn(videoPlayerVariants({ size }), className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => autoHide && isPlaying && setShowControlsState(false)}
        tabIndex={0}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="h-full w-full object-cover"
          onClick={togglePlay}
          {...props}
        />
        {showControls && (
          <>
            <div
              className={cn(
                'pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300',
                !isPlaying || showControlsState ? 'opacity-100' : 'opacity-0'
              )}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30"
              >
                {isPlaying ? (
                  <Pause className="ml-0.5 h-6 w-6" />
                ) : (
                  <Play className="ml-1 h-6 w-6" />
                )}
              </button>
            </div>

            <div
              className={cn(
                'absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
                'pointer-events-none transition-opacity duration-300',
                showControlsState ? 'opacity-100' : 'opacity-0'
              )}
            >
              <div className="pointer-events-auto space-y-3 p-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <span className="min-w-0 font-mono text-xs">{formatTime(currentTime)}</span>
                  <div className="group/progress relative flex-1">
                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      step="0.1"
                      value={currentTime}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleSeek(e);
                      }}
                      className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200 group-hover/progress:[&::-webkit-slider-thumb]:scale-125"
                      style={{
                        background: `linear-gradient(to right, #ffffff 0%, #ffffff ${
                          (currentTime / duration) * 100
                        }%, rgba(255,255,255,0.3) ${
                          (currentTime / duration) * 100
                        }%, rgba(255,255,255,0.3) 100%)`,
                      }}
                    />
                  </div>
                  <span className="min-w-0 font-mono text-xs">{formatTime(duration)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        skip(-10);
                      }}
                      className="rounded-md p-2 text-white transition-colors hover:bg-white/20"
                    >
                      <SkipBack className="h-4 w-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="rounded-md p-2 text-white transition-colors hover:bg-white/20"
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="ml-0.5 h-4 w-4" />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        skip(10);
                      }}
                      className="rounded-md p-2 text-white transition-colors hover:bg-white/20"
                    >
                      <SkipForward className="h-4 w-4" />
                    </button>
                    <div className="group/volume flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute();
                        }}
                        className="rounded-md p-2 text-white transition-colors hover:bg-white/20"
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>
                      <div className="w-0 overflow-hidden transition-all duration-200 group-hover/volume:w-20">
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.1}
                          value={isMuted ? 0 : volume}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleVolumeChange(e);
                          }}
                          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                          style={{
                            background: `linear-gradient(to right, #ffffff 0%, #ffffff ${
                              (isMuted ? 0 : volume) * 100
                            }%, rgba(255,255,255,0.3) ${
                              (isMuted ? 0 : volume) * 100
                            }%, rgba(255,255,255,0.3) 100%)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFullscreen();
                      }}
                      className="rounded-md p-2 text-white transition-colors hover:bg-white/20"
                    >
                      {isFullscreen ? (
                        <Minimize className="h-4 w-4" />
                      ) : (
                        <Maximize className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default VideoPlayer;
