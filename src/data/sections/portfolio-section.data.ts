import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { pdf } from '../helpers/links';

const portfolioSectionData = {
  config: {
    title: 'Publications',
    slug: 'publications',
    icon: 'fa6-solid:file-lines',
    visible: true,
    screenshots: {
      title: 'Preview',
      icon: 'fa6-solid:eye',
    },
  },
  projects: [
    {
      name: 'ATLAS: Automated HLS for DL-Optimized FPGAs',
      dates: [null, null],
      details: [
        { label: 'Venue', value: 'Preprint / arXiv' },
        { label: 'Type', value: 'Preprint' },
        {
          label: 'Authors',
          value: '**Ruthwik Reddy Sunketa** and Aman Arora',
        },
      ],
      pdfDetails: [{ label: 'arXiv', value: '2607.07643', url: 'https://arxiv.org/abs/2607.07643' }],
      description:
        'Introduced ATLAS, an automated flow that transforms high-level deep learning models directly into FPGA implementations without manual RTL work. The system pairs a compiler frontend that converts DL layers into architecture-agnostic GEMM function calls with a backend generator that produces optimized RTL wrappers with tiling and control logic. Evaluated across 11 designs, from individual layers (fully connected, convolution, attention) to complete models (CNNs, MLPs, Transformers), targeting FPGA architectures with specialized tensor acceleration hardware.',
      tagsList: {
        tags: [],
      },
      links: [pdf({ url: 'https://arxiv.org/abs/2607.07643' })],
    },
    {
      name: 'NIFA: Nonlinear IMC enhanced FPGA for efficient ML inference',
      dates: [null, null],
      details: [
        { label: 'Venue', value: 'FPL, 2026' },
        { label: 'Type', value: 'Conference' },
        {
          label: 'Authors',
          value: 'Jiajun Hu, **Ruthwik Reddy Sunketa**, Lei Zhao, Archit Gajjar, Luca Buonanno, and Aman Arora',
        },
      ],
      pdfDetails: [{ label: 'arXiv', value: '2607.15123', url: 'https://arxiv.org/abs/2607.15123' }],
      description:
        'Proposed an architecture combining analog in-memory computing (IMC) blocks with FPGAs, replacing traditional ADCs with analog content-addressable memories (ACAMs) to enable nonlinear operations and dynamic matrix computations directly within IMC blocks. Conducted design-space exploration to optimize crossbar dimensions and developed efficient mapping strategies for attention-based models, achieving **up to 40× higher energy efficiency** and **4.1× higher area efficiency** on CNN and Transformer benchmarks while maintaining robust performance on long input sequences.',
      tagsList: {
        tags: [],
      },
      links: [pdf({ url: 'https://arxiv.org/abs/2607.15123' })],
    },
    {
      name: 'Programming Domain-Specific FPGA Hardblocks from HLS: An RTL Blackbox Approach',
      dates: [null, null],
      details: [
        { label: 'Venue', value: 'RAW, 2026' },
        { label: 'Type', value: 'Workshop' },
        {
          label: 'Authors',
          value: '**Ruthwik Reddy Sunketa**, Jeevesh Choudhury, and Aman Arora',
        },
      ],
      pdfDetails: [{ label: 'arXiv', value: '2606.08380', url: 'https://arxiv.org/abs/2606.08380' }],
      description:
        'Proposed a compiler-independent methodology that lets high-level synthesis tools access custom FPGA hardblocks directly from C/C++ source, treating architectural hardblocks as schedulable operators through an RTL blackbox abstraction with explicit latency and timing contracts. Evaluated on a Tensor Slice-based FPGA architecture using AMD Vitis HLS and the VTR toolchain, achieving **lower area-delay product** than behavioral HLS baselines and substantially higher productivity-adjusted efficiency than handwritten RTL.',
      tagsList: {
        tags: [],
      },
      links: [pdf({ url: 'https://arxiv.org/abs/2606.08380' })],
    },
    {
      name: 'Azure-Lily: An FPGA Architecture with Analog IMC Engines for Efficient AI',
      dates: [null, null],
      details: [
        { label: 'Venue', value: 'ACM TACO, 2026' },
        { label: 'Type', value: 'Journal' },
        {
          label: 'Authors',
          value:
            'Archit Gajjar, **Ruthwik Reddy Sunketa**, Lei Zhao, Omar Eldash, Aishwarya Natarajan, Giacomo Pedretti, Aman Arora, Paolo Faraboschi, Jim Ignowski, and Luca Buonanno',
        },
      ],
      pdfDetails: [{ label: 'DOI', value: '10.1145/3796723', url: 'https://doi.org/10.1145/3796723' }],
      description:
        'Conducted design space exploration to integrate RRAM-based IMC engines into a custom FPGA fabric. Developed Verilog benchmarks for LeNet, ResNet, VGG, and Transformer Attention to evaluate AI workload performance. Achieved a **6.58× latency reduction** and **8,741× energy efficiency gain** over baseline FPGA for DNN inference.',
      tagsList: {
        tags: [],
      },
      links: [pdf({ url: 'https://doi.org/10.1145/3796723' })],
    },
    {
      name: 'Closing the Loop on FPGA Verification: An Iterative Framework for Maximizing Routing Resource Coverage',
      dates: [null, null],
      details: [
        { label: 'Venue', value: 'ACM ISFPGA, 2026' },
        { label: 'Type', value: 'Poster' },
        { label: 'Authors', value: '**Ruthwik Reddy Sunketa** and Aman Arora' },
      ],
      pdfDetails: [{ label: 'DOI', value: '10.1145/3748173.3779567', url: 'https://doi.org/10.1145/3748173.3779567' }],
      description:
        'Developed an iterative framework for FPGA verification that maximizes routing resource coverage. This work addresses the critical need for comprehensive verification methodologies in FPGA design flows.',
      tagsList: {
        tags: [],
      },
      links: [pdf({ url: 'https://doi.org/10.1145/3748173.3779567' })],
    },
    {
      name: 'OpenFPGA-NoC: Automated Fabric and Bitstream Generation for NoC-based FPGAs',
      dates: [null, null],
      details: [
        { label: 'Venue', value: 'ACM TRETS, 2025' },
        { label: 'Type', value: 'Journal' },
        {
          label: 'Authors',
          value:
            '**Ruthwik Reddy Sunketa**, Muhammad Ali Farooq, Ganesh Gore, Allen Boston, Pierre-Emmanuel Gaillardon, and Aman Arora',
        },
      ],
      pdfDetails: [{ label: 'DOI', value: '10.1145/3779449', url: 'https://doi.org/10.1145/3779449' }],
      description:
        'Extended OpenFPGA framework to support hardened Network-on-Chips (NoCs) with arbitrary physical topologies. Developed a dedicated NoC bitstream generator and configuration mechanism to manage dynamic compile-time address translation and global routing mode selection. Evaluated NoC-based architectures through an automated RTL-to-bitstream flow, confirming a **3.66× frequency gain** and **15% lower routing congestion** for I/O-intensive workloads over traditional fabrics.',
      tagsList: {
        tags: [],
      },
      links: [pdf({ url: 'https://doi.org/10.1145/3779449' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
