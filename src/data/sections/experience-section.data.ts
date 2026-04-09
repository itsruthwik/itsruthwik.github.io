import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import {
  python,
  cCpp,
  verilog,
  systemverilog,
  xilinx,
  synopsys,
  cadence,
  openfpga,
  openroad,
  vtr,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experience',
    slug: 'research',
    icon: 'fa6-solid:microscope',
    visible: true,
  },
  jobs: [
    {
      company: 'Instructional Assistant - CEN 598: Advanced Digital Design and Verification, Teaching Assistant - CSE 325: Embedded Microprocessor Systems',
      role: 'Arizona State University',
      dates: [new Date('2025-05'), new Date('2025-07')],
      description: 'Tempe, AZ, USA',
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      company: 'Teaching Assistant - CSE 325: Embedded Microprocessor Systems',
      role: 'Arizona State University',
      dates: [new Date('2024-08'), new Date('2024-12')],
      description: 'Tempe, AZ, USA',
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      company: 'Intern (Systems V&V)',
      role: 'Medtronic',
      dates: [new Date('2023-02'), new Date('2023-07')],
      description: 'Hyderabad, Telangana, India',
      tagsList: {
        title: '',
        tags: [],
      },
      links: [website({ url: 'https://www.medtronic.com' })],
    },
    {
      company: 'Project Intern (Hardware in Loop Simulation)',
      role: 'DRDO, Ministry of Defence, Govt. of India',
      dates: [new Date('2022-05'), new Date('2022-09')],
      description: 'Hyderabad, Telangana, India',
      tagsList: {
        title: '',
        tags: [],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
