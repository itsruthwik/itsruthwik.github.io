import type { Paper } from '@/types/paper.types';
import rtlBlackboxHls from './rtl-blackbox-hls';

/** Every paper listed here gets its own page at /papers/<slug>/. */
const papers: Paper[] = [rtlBlackboxHls];

export const paperUrl = (slug: string) => `/papers/${slug}/`;

export default papers;
