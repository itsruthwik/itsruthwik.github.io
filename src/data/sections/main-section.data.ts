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
  image: import('@/assets/ruthwik.jpg'),
  fullName: 'Ruthwik Reddy Sunketa',
  role: 'PhD student at',
  roleLink: {
    text: 'Advent Lab, ASU',
    url: 'https://labs.engineering.asu.edu/advent/',
  },
  details: [
    { label: 'Email', value: 'rsunketa@asu.edu', url: 'mailto:rsunketa@asu.edu' },
    { label: 'Based in', value: 'Tempe, AZ' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'rsunketa@asu.edu' },
    { label: 'LinkedIn', value: '/in/rsunketa', url: 'https://linkedin.com/in/rsunketa' },
    { label: 'GitHub', value: '/rsunketa', url: 'https://github.com/rsunketa' },
    { label: 'Website', value: 'itsruthwik.com', url: '/', fullRow: true },
  ],
  description:
    'Computer Engineering PhD student specializing in **FPGA architecture**, design, and **automated EDA flows**. Current research focuses on next-generation FPGA architectures for **AI/ML workload acceleration** and **hardware-software co-design**. Experience in digital design, verification, physical design, and EDA flow development.',
  tags: [{ name: 'PhD Student at ASU' }, { name: 'FPGA Architecture' }, { name: 'EDA Tools' }],
  action: {
    label: 'Download Resume',
    url: '/cv.pdf',
    downloadedFileName: 'Ruthwik_Sunketa_Resume.pdf',
  },
  links: [linkedin({ url: 'https://linkedin.com/in/rsunketa' }), github({ url: 'https://github.com/itsruthwik/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
