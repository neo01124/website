export interface OpenSourceProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year: number;
  externalUrl: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: 'Open source 1',
    title: 'AWSSSMChaosRunner',
    description: 'A library which simplifies failure injection testing and chaos engineering for AWS.',
    technologies: ['Kotlin', 'Open Source'],
    year: 2021,
    externalUrl: 'https://github.com/amzn/awsssmchaosrunner'
  },
  {
    id: 'Open source 2',
    title: 'Google Summer of Code intern for BeagleBoard.org',
    description: 'A high level interface for Pulse Width Modulation via output pins of the BeagleBoard.',
    technologies: ['C', 'Open Source'],
    year: 2010,
    externalUrl: 'https://medium.com/@neo01124/google-summer-of-code-2010-high-level-interface-for-pwm-for-the-beagleboard-7e2485fb94c4'
  },
  {
    id: 'Open source 3',
    title: 'Google Summer of Code intern for Mixxx.org',
    description: 'Automated key detection and pitch independent/dependent tempo shifting for the best open source Dj software.',
    technologies: ['C++', 'Open Source'],
    year: 2012,
    externalUrl: 'https://medium.com/@neo01124/harmonic-mixing-features-for-mixxx-open-source-dj-ing-software-google-summer-of-code-2012-78d5685f6670'
  }
].sort((a, b) => b.year - a.year); 