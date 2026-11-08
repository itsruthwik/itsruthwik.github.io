import type { Paper } from '@/types/paper.types';

const base = '/papers/rtl-blackbox-hls';

const paper: Paper = {
  slug: 'rtl-blackbox-hls',
  title: 'Programming Domain-Specific FPGA Hardblocks from HLS: An RTL Blackbox Approach',
  authors: [
    { name: 'Ruthwik Reddy Sunketa', url: '/', isMe: true },
    { name: 'Jeevesh Choudhury' },
    { name: 'Aman Arora' },
  ],
  affiliations: ['Arizona State University'],
  venue: 'RAW 2026',
  type: 'Workshop paper',
  links: [
    { label: 'Paper', url: 'https://arxiv.org/pdf/2606.08380', icon: 'fa6-solid:file-pdf' },
    { label: 'arXiv', url: 'https://arxiv.org/abs/2606.08380', icon: 'fa6-solid:book-open' },
  ],
  tldr: 'Use custom FPGA hardblocks such as Tensor Slices directly from C/C++ high-level synthesis, without writing RTL or modifying the HLS compiler.',
  abstract: `Domain-specific Field Programmable Gate Array (FPGA) architectures increasingly integrate specialized hardblocks, such as Tensor Slices, to accelerate artificial intelligence and machine learning workloads. Despite their efficiency benefits, these architectures remain difficult to program because designers typically rely on manual Register-Transfer Level (RTL) integration to access these hardblocks.

This paper presents a compiler-agnostic methodology that enables high-level synthesis (HLS) tools to target custom FPGA hardblocks directly from C/C++ code. Architectural hardblocks are exposed as schedulable C-level operators using an RTL blackbox abstraction with explicit latency and initiation-interval contracts, allowing the HLS scheduler to optimize around specialized hardware without manual RTL orchestration. Unlike traditional uses of HLS blackboxes for external IP integration, our approach treats blackboxes as architectural abstractions, enabling scalable composition of C-level operators that target custom FPGA hardblocks without compiler modification.

We evaluate the proposed flow using a Tensor Slice-based FPGA architecture with AMD Vitis HLS and the Verilog-to-Routing (VTR) toolchain. Across multiple matrix sizes, designs generated using the proposed C-Blackbox flow achieve lower area-delay product than behavioral HLS baselines while providing substantially higher productivity-adjusted efficiency than handwritten RTL implementations. These results demonstrate that domain-specific FPGA architectures can be made accessible through HLS while maintaining competitive hardware efficiency.`,
  highlights: [
    { value: '~14×', label: 'less user-written code than handwritten RTL (32×32 GEMM)' },
    { value: '1.83×', label: 'higher throughput efficiency than behavioral HLS' },
    { value: '7–9×', label: 'higher productivity-adjusted efficiency than RTL' },
    { value: '15–20%', label: 'latency gap to handwritten RTL' },
  ],
  teaser: {
    src: `${base}/design-flows.png`,
    alt: 'Three design flows targeting the same FPGA fabric: C Baseline, C + Blackbox (proposed) and RTL Baseline',
    caption:
      'Three FPGA design flows targeting the same heterogeneous fabric. C-Baseline expresses computation entirely in high-level code; RTL-Baseline instantiates hardblocks at the RTL level. The proposed C-Blackbox flow integrates pre-designed RTL wrappers as blackbox operators within C code, bridging design productivity and hardware efficiency.',
    width: 1400,
    height: 1078,
  },
  figures: [
    {
      src: `${base}/pipeline.png`,
      alt: 'End-to-end flow: C/C++ design and blackbox library through AMD Vitis HLS, then the VTR toolchain to implementation results',
      caption:
        'End-to-end design flow: the C-level blackbox library (operator, structural RTL wrapper, functional C-model and scheduling metadata) feeds AMD Vitis HLS, and the generated RTL is implemented on the hardblock-enabled architecture with the VTR toolchain.',
      width: 1370,
      height: 1226,
    },
    {
      src: `${base}/results.png`,
      alt: 'Bar and line chart comparing efficiency and efficiency per line of code for C, C-Blackbox and RTL across 8×8, 16×16 and 32×32 matrices',
      caption:
        'Throughput efficiency (bars) and efficiency per line of code (lines) across matrix sizes, normalized to C-Blackbox. RTL has the highest raw efficiency, but C-Blackbox leads once design effort is taken into account.',
      width: 1015,
      height: 771,
    },
  ],
  bibtex: `@inproceedings{sunketa2026rtlblackbox,
  title         = {Programming Domain-Specific {FPGA} Hardblocks from {HLS}: An {RTL} Blackbox Approach},
  author        = {Sunketa, Ruthwik Reddy and Choudhury, Jeevesh and Arora, Aman},
  booktitle     = {Reconfigurable Architectures Workshop (RAW)},
  year          = {2026},
  eprint        = {2606.08380},
  archivePrefix = {arXiv}
}`,
  ogImage: `${base}/og.jpg`,
};

export default paper;
