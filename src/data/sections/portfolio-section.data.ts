import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import { python, verilog, vtr, openfpga, xilinx, synopsys, cadence } from '../helpers/skills';

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
      name: 'OpenFPGA-NoC: Automated Fabric and Bitstream Generation for NoC-based FPGAs',
      dates: [new Date('2024-08'), new Date('2025-06')],
      details: [
        { label: 'Venue', value: 'ACM TRETS, 2025' },
        { label: 'Type', value: 'Journal' },
        { label: 'Authors', value: 'Ruthwik Reddy Sunketa (1st Author)' },
      ],
      pdfDetails: [{ label: 'DOI', value: 'TBD', url: '#' }],
      description:
        'Extended OpenFPGA framework to support hardened Network-on-Chips (NoCs) with arbitrary physical topologies. Developed a dedicated NoC bitstream generator and configuration mechanism to manage dynamic compile-time address translation and global routing mode selection. Evaluated NoC-based architectures through an automated RTL-to-bitstream flow, confirming a **3.66× frequency gain** and **15% lower routing congestion** for I/O-intensive workloads over traditional fabrics.',
      tagsList: {
        title: 'Keywords',
        tags: [verilog(), openfpga(), vtr(), python()],
      },
      links: [website({ url: '#' })],
    },
    {
      name: 'Closing the Loop on FPGA Verification: An Iterative Framework for Maximizing Routing Resource Coverage',
      dates: [new Date('2026'), null],
      details: [
        { label: 'Venue', value: 'ACM ISFPGA, 2026' },
        { label: 'Type', value: 'Poster' },
        { label: 'Authors', value: 'Ruthwik Reddy Sunketa (1st Author)' },
      ],
      pdfDetails: [{ label: 'DOI', value: 'TBD', url: '#' }],
      description:
        'Developed an iterative framework for FPGA verification that maximizes routing resource coverage. This work addresses the critical need for comprehensive verification methodologies in FPGA design flows.',
      tagsList: {
        title: 'Keywords',
        tags: [verilog(), vtr(), python()],
      },
      links: [website({ url: '#' })],
    },
    {
      name: 'Azure-Lily: An FPGA Architecture with Analog IMC Engines for Efficient AI',
      dates: [new Date('2025-08'), new Date('2025-11')],
      details: [
        { label: 'Venue', value: 'ACM TACO, 2026' },
        { label: 'Type', value: 'Journal' },
        { label: 'Authors', value: 'Ruthwik Reddy Sunketa (2nd Author)' },
      ],
      pdfDetails: [{ label: 'DOI', value: 'TBD', url: '#' }],
      description:
        'Conducted design space exploration to integrate RRAM-based IMC engines into a custom FPGA fabric. Developed Verilog benchmarks for LeNet, ResNet, VGG, and Transformer Attention to evaluate AI workload performance. Achieved a **6.58× latency reduction** and **8,741× energy efficiency gain** over baseline FPGA for DNN inference.',
      tagsList: {
        title: 'Keywords',
        tags: [verilog(), xilinx(), python(), synopsys(), cadence()],
      },
      links: [website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
