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
      location: 'Tempe, AZ, USA',
      dates: [new Date('2025-08'), null],
      description: '',
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      title: 'M.S. in Computer Engineering',
      institution: 'Arizona State University',
      location: 'Tempe, AZ, USA',
      dates: [new Date('2023-08'), new Date('2025-07')],
      description: '',
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      title: 'B.E. in Electronics and Communication Engineering',
      institution: 'Osmania University',
      location: 'Hyderabad, Telangana, India',
      dates: [new Date('2019-08'), new Date('2023-05')],
      description: '',
      links: [website({ url: 'https://uceou.edu/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
