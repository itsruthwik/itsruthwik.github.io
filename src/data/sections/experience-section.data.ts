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
    title: 'Research Experience',
    slug: 'research',
    icon: 'fa6-solid:microscope',
    visible: true,
  },
  jobs: [
    {
      role: 'Research Assistant - HLS-to-VTR: Architecture-Aware High-Level Synthesis',
      company: 'Arizona State University',
      dates: [new Date('2025-12'), null],
      description: `
Developing HLS frontend for VTR framework to enable architecture-aware RTL generation from C/C++ designs.

- Implementing custom MLIR lowering passes to automate the mapping of high-level algorithmic operations to specialized hardware like tensor slices and Processing-In-Memory (PIM) blocks
      `,
      tagsList: {
        title: 'Technologies',
        tags: [cCpp(), verilog(), vtr(), python()],
      },
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      role: 'Research Assistant - Configurable Voltage FPGA',
      company: 'Arizona State University',
      dates: [new Date('2025-08'), new Date('2026-01')],
      description: `
Explored mixed-voltage FPGA architectures with on-chip Digital LDOs (DLDOs) to enable drop-in replacement for legacy 3.3V / 5V ICs.

- Designed and evaluated a custom FPGA fabric using OpenFPGA, including architecture selection, scalable fabric generation, and bitstream-based functional verification
- Performed RTL-to-GDS physical design using OpenLane, including power analysis, DLDO sizing, DRC/LVS sign-off, and tapeout submission on SKY130 technology
      `,
      tagsList: {
        title: 'Technologies',
        tags: [verilog(), openfpga(), openroad(), synopsys(), cadence()],
      },
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      role: 'Research Assistant - Azure-Lily: Analog In-Memory Computing (IMC) FPGA Architecture',
      company: 'Arizona State University',
      dates: [new Date('2025-08'), new Date('2025-11')],
      description: `
Conducted design space exploration to integrate RRAM-based IMC engines into a custom FPGA fabric, defining optimal block dimensions, I/O density, and routing interfaces.

- Developed Verilog benchmarks for LeNet, ResNet, VGG, and Transformer Attention to evaluate AI workload performance on the hybrid architecture
- Achieved a 6.58× latency reduction and 8,741× energy efficiency gain over baseline FPGA for DNN inference
      `,
      tagsList: {
        title: 'Technologies',
        tags: [verilog(), systemverilog(), python(), xilinx()],
      },
      links: [website({ url: 'https://www.asu.edu' })],
    },
    {
      role: 'Research Assistant - OpenFPGA-NoC: Automated Fabric and Bitstream Generation for NoC-based FPGAs',
      company: 'Arizona State University',
      dates: [new Date('2024-08'), new Date('2025-06')],
      description: `
Extended OpenFPGA framework to support hardened Network-on-Chips (NoCs) with arbitrary physical topologies.

- Developed a dedicated NoC bitstream generator and configuration mechanism to manage dynamic compile-time address translation and global routing mode selection
- Evaluated NoC-based architectures through an automated RTL-to-bitstream flow, confirming a 3.66× frequency gain and 15% lower routing congestion for I/O-intensive workloads over traditional fabrics
      `,
      tagsList: {
        title: 'Technologies',
        tags: [verilog(), openfpga(), vtr(), python()],
      },
      links: [website({ url: 'https://www.asu.edu' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
