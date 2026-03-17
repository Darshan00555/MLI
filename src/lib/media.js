const trimTrailingSlash = (value = '') => value.replace(/\/+$/, '');

const projectImagesBaseUrl = trimTrailingSlash(import.meta.env.VITE_PROJECT_IMAGES_BASE_URL || '');

const modelImagesBaseUrl = trimTrailingSlash(import.meta.env.VITE_MODEL_IMAGES_BASE_URL || '');

const optimizedLocalVariants = new Set([
  'IMG_5394.webp',
  'IMG_5395.webp',
  'IMG_5396.webp',
  'IMG_5397.webp',
  'IMG_5398.webp',
  'IMG_5399.webp',
  'IMG_5400.webp',
  'IMG_5402.webp',
  'IMG_5408.webp',
  'IMG_5409.webp',
  'IMG_5410.webp',
  'IMG_5411.webp',
  'IMG_5412.webp',
  'IMG_5413.webp',
  'IMG_5476.webp',
  'IMG_5477.webp',
  'IMG_5478.webp',
  'IMG_5479.webp',
  'IMG_5480.webp',
  'IMG_5481.webp',
  'IMG_5482.webp',
  'IMG_5483.webp',
  'IMG_5484.webp',
  'IMG_5485.webp',
  'IMG_5486.webp',
  'IMG_5487.webp',
  'IMG_5488.webp',
  'IMG_5489.webp',
  'IMG_5490.webp',
  'IMG_5491.webp',
  'IMG_5492.webp',
  'IMG_5493.webp',
  'IMG_5495.webp',
  'IMG_5496.webp',
  'IMG_5497.webp',
  'IMG_5498.webp',
  'IMG_5503.webp',
  'IMG_5504.webp',
  'IMG_5505.webp',
]);

const buildLocalProjectImagePath = (filename) => {
  if (!optimizedLocalVariants.has(filename)) {
    return `/project_pic/${filename}`;
  }

  return `/project_pic/${filename.replace('.webp', '(1).webp')}`;
};

export const getImageUrl = (filename, { source = 'project' } = {}) => {
  if (!filename) {
    return '';
  }

  if (/^https?:\/\//i.test(filename)) {
    return filename;
  }

  if (filename === 'LOGO.png') {
    return getLogoUrl();
  }

  const baseUrl = source === 'model' ? modelImagesBaseUrl : projectImagesBaseUrl;

  if (baseUrl) {
    return `${baseUrl}/${filename}`;
  }

  return buildLocalProjectImagePath(filename);
};

export const getLogoUrl = () => import.meta.env.VITE_LOGO_URL || '/LOGO.png';
