import type { IconName } from './shared';

export interface PaperAuthor {
  name: string;
  /** Optional homepage. */
  url?: string;
  /** Highlights the author (used for the site owner). */
  isMe?: boolean;
}

export interface PaperLink {
  label: string;
  url: string;
  icon: IconName;
}

export interface PaperFigure {
  /** Path under `public/`, e.g. `/papers/my-paper/figure.png`. */
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface PaperHighlight {
  /** Short headline number, e.g. "14×". */
  value: string;
  label: string;
}

export interface Paper {
  /** Used in the page URL: /papers/<slug>/ */
  slug: string;
  title: string;
  authors: PaperAuthor[];
  affiliations: string[];
  /** e.g. "RAW 2026" */
  venue: string;
  /** e.g. "Workshop paper" */
  type: string;
  links: PaperLink[];
  /** One-sentence summary used under the title and in link previews. */
  tldr: string;
  /** Paper abstract. Paragraphs are separated by blank lines. */
  abstract: string;
  highlights?: PaperHighlight[];
  teaser?: PaperFigure;
  figures?: PaperFigure[];
  bibtex: string;
  /** Path under `public/` to a 1200×630 link-preview image. */
  ogImage?: string;
}
