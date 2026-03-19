import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Ph.D. in Computer Engineering',
      institution: 'Arizona State University',
      dates: [new Date('2025-08'), null],
      description: 'Specialization in FPGA architecture, design, and automated EDA flows.',
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      title: "Master's in Computer Engineering",
      institution: 'Arizona State University',
      dates: [new Date('2023-08'), new Date('2025-07')],
      description:
        'Relevant Coursework: Reconfigurable Computing, VLSI Design, Hardware Security and Trust, Advanced Hardware and Systems for Machine Learning, Statistical Machine Learning, Real-Time Digital Signal Processing.',
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      title: 'Bachelor of Engineering in Electronics and Communication Engineering',
      institution: 'Osmania University',
      dates: [new Date('2019-08'), new Date('2023-05')],
      description: 'Location: Hyderabad, India',
      links: [website({ url: 'https://www.osmania.ac.in' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
