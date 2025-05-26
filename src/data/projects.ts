export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  details?: string;
  imageUrl?: string;
  externalUrl?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'Sunspot number',
    title: 'Paper on sunspot number calculation',
    description: 'I presented a poster in the proceedings of the Indian Conference on Computer Vision, Graphics and Image processing at IIT Madras.',
    technologies: ['C', 'Astronomy'],
    year: 2010,
    externalUrl: '/data/icvgip.pdf'
  },
  {
    id: 'Single coil number',
    title: 'Single coil pickup build',
    description: 'I built a single coil pickup for my acoustic guitar using magnets salvaged from an old hard disk.',
    technologies: ['Electronics','DIY'],
    year: 2010,
    externalUrl: 'https://medium.com/@neo01124/single-coil-pickup-for-an-acoustic-guitar-b0166cafa68#.j8ytk46k6'
  },
  {
    id: 'Diddley bow',
    title: 'Slide guitar build',
    description: 'I built a slide guitar from junk around the house.',
    technologies: ['Electronics','DIY'],
    year: 2010,
    externalUrl: 'https://medium.com/@neo01124/diddley-bow-4e64ced1789d#.cjq2w67q1'
  },
  {
    id: 'Yamaha music 2',
    title: 'Internship at Yamaha Music R&D, Japan',
    description: 'I interned with the Vocaloid R&D team to improve phonetic segmentation for training data.',
    technologies: ['Python', 'Music Information Retrieval'],
    year: 2012,
    externalUrl: 'https://medium.com/@neo01124/harmonic-mixing-features-for-mixxx-open-source-dj-ing-software-google-summer-of-code-2012-78d5685f6670'
  },
  {
    id: 'Underwater',
    title: 'Underwater Robot for a student robotics competition',
    description: 'I was part of a team of students who built a submarine which competed at the International Autonomous Underwater Vehicle Competition in San Diego. I worked on the sensor integration and control systems',
    technologies: ['Control systems', 'Robotics'],
    year: 2009
  },
  {
    id: 'Ground',
    title: 'Student robotics competition',
    description: 'I was part of a team of students who built a ground robot which competed at the TechX Challenge in Singapore. I worked on the sensor integration and control systems',
    technologies: ['Control systems', 'Robotics'],
    year: 2008,
    externalUrl: '/data/AGV.pdf'
  },
  {
    id: 'Master thesis',
    title: 'Improving automatic phonetic segmentation for creating singing voice synthesizer corpora.',
    description: 'Machine learning models (random forests) applied to corpora of singing for the Vocaloid. This was my master\'s thesis.',
    technologies: ['Python', 'scikit-learn', 'Music Information Retrieval'],
    year: 2012,
    externalUrl: '/data/master_thesis.pdf'
  },
  {
    id: 'Undergraduate thesis',
    title: 'Clustering algorithm in CUDA',
    description: 'A parallelised K-means algorithm (Lloyd\'s Algorithm) on a GPU as a final undergraduate project. This was my undergrad thesis.',
    technologies: ['C'],
    year: 2010,
    externalUrl: '/data/undergrad_thesis.pdf'
  },
  // {
  //   id: 'project-3',
  //   title: 'Project 3',
  //   description: 'A brief description of the project and its key features.',
  //   technologies: ['React', 'Next.js'],
  //   year: 2001,
  //   details: `This is a detailed description of Project 3. It includes:
  //   - Key features and functionality
  //   - Technical challenges overcome
  //   - Impact and results achieved
  //   - Technologies used in depth
    
  //   You can add more details about the project here, including:
  //   - Development process
  //   - Design decisions
  //   - Future improvements
  //   - Links to live demo or repository`
  // },
].sort((a, b) => b.year - a.year); 