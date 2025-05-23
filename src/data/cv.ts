interface PersonalInfo {
  name: string;
  email: string;
  website: string;
  location: string;
  summary: string;
}

interface SkillsSection {
  title: string;
  content: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  courses?: string;
  thesis?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Varun Jewalikar",
  email: "varunjewalikar@gmail.com",
  website: "varunjewalikar.com",
  location: "London, UK",
  summary: "Software engineer with 15 years experience in delivering large scale distributed systems and machine learning systems (audio, text and image based)."
};

export const skills: SkillsSection[] = [
  {
    title: "Interests",
    content: "Backend engineering, machine learning, natural language processing, data visualization, audio analysis, web scraping, rapid prototyping."
  },
  {
    title: "Tools",
    content: "Java, Kotlin, AWS, Javascript, Python, HTML, CSS, C, AWS, Scikit-learn, Linux, Git, Bash."
  },
  {
    title: "Languages",
    content: "English, Spanish, Italian, Hindi and Marathi."
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Amazon",
    period: "2017 - Present",
    location: "London, UK",
    description: [
      "I design, implement and maintain high traffic services (1 million requests/sec) for Prime Video. These services are deployed on a mix of AWS and Amazon internal infrastructure.",
      "Designs done by me have saved $2M YoY."
    ],
    technologies: "Java, Kotlin, Javascript, Python, Spring, DynamoDb, Cloudformation, Ec2, AWS IoT"
  },
  {
    title: "Consultant and tutor",
    company: "",
    period: "Oct - Dec 2016",
    location: "London, UK",
    description: [
      "I consulted/taught Python, machine learning, natural language processing and software engineering to professionals and students."
    ]
  },
  {
    title: "Software Engineer",
    company: "Stylezz",
    period: "Mar - Oct 2016",
    location: "London, UK",
    description: [
      "I designed the backend for this shopping app. I prototyped deep learning based clothes categorization and image-image search system to improve discovery."
    ],
    technologies: "Python, MongoDb, Flask, Scikit-learn, Caffe, Ec2, Elastic beanstalk"
  },
  {
    title: "Software Engineer",
    company: "Musixmatch",
    period: "2014 - 2016",
    location: "Bologna, Italy",
    description: [
      "I did audio/lyrics/data analysis projects, collaborated with researchers, hired/supervised interns and made features for products.",
      "I made data driven articles which been featured in The Guardian, Billboard.com, etc. Other research projects: mood prediction, improving lyrics sync, detection of new releases from Youtube and instrumental song detection."
    ],
    technologies: "Python, Javascript, MongoDb, Scikit-learn, Flask, NodeJS, Webpack, NLTK, Ec2"
  },
  {
    title: "R&D trainee",
    company: "Yamaha Music",
    period: "Sep - Dec 2013",
    location: "Japan",
    description: [
      "Vocaloid is a singing voice synthesizer. I used ML to improve phonetic segmentation for the creation of new singing voices for Vocaloid."
    ],
    technologies: "Python, Scikit-learn, Git"
  },
  {
    title: "Intern",
    company: "Mixxx.org",
    period: "Apr - Jul 2013",
    location: "Barcelona, Spain",
    description: [
      "I was a Google Summer of Code intern for Mixxx which is an open source DJ-ing software written in C++. I added key detection, tempo independent pitch shifting and harmonic mixing for DJs."
    ],
    technologies: "C++, Qt, Git"
  },
  {
    title: "Intern",
    company: "Beagleboard.org",
    period: "Apr - Jul 2010",
    location: "Delhi, India",
    description: [
      "I was a Google Summer of Code intern for Beagleboard which is a low-power single-board computer by Texas Instruments. I wrote a high level interface for Pulse width modulation via the output pins."
    ],
    technologies: "C, Git"
  }
];

export const education: Education[] = [
  {
    degree: "M.S. in Sound and Music Computing",
    institution: "Universitat Pompeu Fabra",
    period: "2011 - 2013",
    location: "Barcelona, Spain",
    courses: "Audio & music processing, Music perception & cognition & Machine Learning",
    thesis: "Improving automatic phonetic segmentation for creating singing voice synthesizer corpora"
  },
  {
    degree: "B.E. in Computer Engineering",
    institution: "Delhi College of Engineering",
    period: "2006 - 2010",
    location: "Delhi, India",
    thesis: "A novel parallel clustering algorithm implementation with CUDA"
  }
]; 