import { getImageUrl } from '../lib/media';

export const projects = [
  {
    id: 1,
    slug: 'ireo-a1-01',
    title: 'IREO A1-01',
    location: 'Sector 60, Gurugram',
    category: 'Builder Floors',
    coverImage: '/Elevation.jpg.webp',
    heroImage: getImageUrl('IMG_5400.webp'),
    modelImage: '/Elevation.jpg.jpeg',
    galleryImages: [
      getImageUrl('IMG_5402.webp'),
      getImageUrl('IMG_5476.webp'),
      getImageUrl('IMG_5477.webp'),
    ],
    description:
      'Located in the exclusive Ireo Plots, Sector 60, this nearly ready builder floor offers private, gated lane living with modern design and premium finishes.',
    detailParagraphs: [
      'Located in the exclusive Ireo Plots, Sector 60, this nearly ready builder floor offers private, gated lane living with modern design and premium finishes.',
      'A perfect blend of privacy, security, and prime location.',
    ],
    ctaLabel: 'Book a Site Visit',
  },
  {
    id: 2,
    slug: 'ireo-a1-18',
    title: 'IREO A1-18',
    location: 'Sector 60, Gurugram',
    category: 'Builder Floors',
    coverImage: '/A18 Elevation.webp',
    heroImage: getImageUrl('IMG_5408.webp'),
    modelImage: '/A18 Elevation.webp',
    galleryImages: [
      getImageUrl('IMG_5409.webp'),
      getImageUrl('IMG_5410.webp'),
      getImageUrl('IMG_5478.webp'),
    ],
    description:
      'A ready-to-move builder floor in the prestigious Ireo Plots, Sector 60, offering a perfect mix of modern design and everyday comfort.',
    detailParagraphs: [
      'A ready-to-move builder floor in the prestigious Ireo Plots, Sector 60, offering a perfect mix of modern design and everyday comfort.',
      'Experience private, peaceful living in one of Gurugram’s most desirable neighborhoods.',
    ],
    ctaLabel: 'Book a Site Visit',
  },
  {
    id: 3,
    slug: 'suncity-c-85',
    title: 'Suncity C-85',
    location: 'Sector 54, Gurugram',
    category: 'Builder Floors',
    coverImage: '/scene-1.jpg.webp',
    heroImage: getImageUrl('IMG_5411.webp'),
    modelImage: '/scene-1.jpg.webp',
    galleryImages: [
      getImageUrl('IMG_5412.webp'),
      getImageUrl('IMG_5413.webp'),
      getImageUrl('IMG_5479.webp'),
    ],
    description:
      'Located in the prime neighborhood of Suncity, Sector 54, this ready builder floor offers refined living with seamless connectivity to Golf Course Road.',
    detailParagraphs: [
      'Located in the prime neighborhood of Suncity, Sector 54, this ready builder floor offers refined living with seamless connectivity to Golf Course Road.',
      'Designed for those who value space, privacy, and a central Gurugram address.',
    ],
    ctaLabel: 'Book a Site Visit',
  },
  {
    id: 4,
    slug: 'ireo-a-1502',
    title: 'IREO A-1502',
    location: 'Sector 60, Gurugram',
    category: 'Builder Floors',
    coverImage: '/project_pic/A-1502/A_1502_Elevation_01.jpg.webp',
    heroImage: '/project_pic/A-1502/A_1502_Elevation_02.jpg.webp',
    modelImage: '/project_pic/A-1502/A_1502_Elevation_01.jpg.webp',
    floorPlanPdf: '/project_pic/A-1502/A-15-FURNITURE PLAN-CIVIL PLAN.pdf',
    galleryImages: [
      '/project_pic/A-1502/A_1502_Elevation_01.jpg.webp',
      '/project_pic/A-1502/A_1502_Elevation_02.jpg.webp',
    ],
    description:
      'A thoughtfully designed builder floor in the prestigious Ireo Plots, Sector 60, featuring a spacious layout, premium finishes, and private gated living.',
    detailParagraphs: [
      'A thoughtfully designed builder floor in the prestigious Ireo Plots, Sector 60, featuring a spacious layout, premium finishes, and private gated living.',
      'An ideal blend of modern architecture and everyday comfort in one of Gurugram’s most sought-after addresses.',
    ],
    ctaLabel: 'Book a Site Visit',
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
