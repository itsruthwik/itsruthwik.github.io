import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Ruthwik Reddy Sunketa - Computer Engineering PhD Student',
    description:
      'Computer Engineering PhD student at Arizona State University specializing in FPGA architecture, design, and automated EDA flows. Research focuses on next-generation FPGA architectures for AI/ML workload acceleration and hardware-software co-design.',
    faviconPath: '/src/assets/ruthwik-s.jpg',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
