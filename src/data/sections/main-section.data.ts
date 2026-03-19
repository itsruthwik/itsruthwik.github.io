import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Ruthwik Reddy Sunketa',
  role: 'Computer Engineering PhD Student',
  details: [
    { label: 'Phone', value: '623-275-8696', url: 'tel:623-275-8696' },
    { label: 'Email', value: 'rsunketa@asu.edu', url: 'mailto:rsunketa@asu.edu' },
    { label: 'From', value: 'Tempe, AZ' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '623-275-8696' },
    { label: 'Email', value: 'rsunketa@asu.edu' },
    { label: 'LinkedIn', value: '/in/rsunketa', url: 'https://linkedin.com/in/rsunketa' },
    { label: 'GitHub', value: '/rsunketa', url: 'https://github.com/rsunketa' },
    { label: 'Website', value: 'itsruthwik.com', url: '/', fullRow: true },
  ],
  description:
    'Computer Engineering PhD student specializing in **FPGA architecture**, design, and **automated EDA flows**. Current research focuses on next-generation FPGA architectures for **AI/ML workload acceleration** and **hardware-software co-design**. Experience in digital design, verification, physical design, and EDA flow development.',
  tags: [{ name: 'PhD Student at ASU' }, { name: 'FPGA Architecture' }, { name: 'EDA Tools' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Ruthwik_Sunketa.pdf',
  },
  links: [linkedin({ url: 'https://linkedin.com/in/rsunketa' }), github({ url: 'https://github.com/rsunketa' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
