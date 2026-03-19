import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  python,
  cCpp,
  verilog,
  systemverilog,
  quartus,
  xilinx,
  synopsys,
  cadence,
  openfpga,
  openroad,
  vtr,
  typescript,
  eslint,
  prettier,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: false,
  },
  skillSets: [
    {
      title: 'Programming Languages',
      skills: [
        python({
          level: 5,
          description: 'Extensive experience in Python for EDA automation and MLIR development',
        }),
        cCpp({
          level: 4,
          description: 'C/C++ for HLS development and hardware-software co-design',
        }),
        typescript({
          level: 3,
          description: 'TypeScript for web development',
        }),
      ],
    },
    {
      title: 'Hardware Description Languages',
      skills: [
        verilog({
          level: 5,
          description: 'Extensive experience in Verilog for FPGA design and verification',
        }),
        systemverilog({
          level: 4,
          description: 'SystemVerilog for advanced verification and testbenches',
        }),
      ],
    },
    {
      title: 'EDA Tools',
      skills: [
        quartus({ level: 4 }),
        xilinx({ level: 4 }),
        synopsys({ level: 4, description: 'VCS, Design Compiler, PrimeTime' }),
        cadence({ level: 4, description: 'Genus, Innovus, Virtuoso' }),
        openfpga({ level: 5, description: 'OpenFPGA framework extension and development' }),
        openroad({ level: 4, description: 'OpenROAD for RTL-to-GDS flow' }),
        vtr({ level: 5, description: 'VTR/VPR for FPGA architecture exploration' }),
      ],
    },
    {
      title: 'Development Tools',
      skills: [eslint({ level: 4 }), prettier({ level: 4 })],
    },
    {
      title: 'I speak',
      skills: [{ icon: 'circle-flags:us', name: 'English - Professional' }],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
