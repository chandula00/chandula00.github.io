import type { Project, Experience, Education, Skill, Publication } from '../types';

export const personalInfo = {
  name: 'Chandula Adhikari',
  title: 'Research Student & Teaching Assistant',
  email: 'rajcadhikari@gmail.com',
  location: 'University of Peradeniya, Sri Lanka',
  phone: '+94 711530046',
  github: 'https://github.com/chandula00',
  linkedin: 'https://www.linkedin.com/in/janith-chandula-adhikari-5543a5223',
  bio: 'Research student specializing in computational biology, integrating molecular biology with deep learning, data science and computer vision to develop adaptive Human-AI collaborative systems for healthcare diagnostics and molecular-level analysis. Aspiring PhD candidate.',
  image: '/profile-image.jpg',
  resumeUrl: 'https://chandula00.github.io/Documents/Resume_Chandula.pdf',
  researchInterests: [
    'Computational Biology',
    'Deep Learning',
    'Data Science',
    'Computer Vision',
    'Human-AI Collaborative Systems',
    'Healthcare Diagnostics',
    'Explainable AI',
    'Embedded Systems',
  ],
};

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Assisted Tool for Assessing Quality of Final Root Canal Treatment',
    description: 'Developing an explainable AI framework for automated root canal treatment quality assessment using 1,000 anonymized intraoral periapical radiographs. Four-stage pipeline comprising dataset curation, expert-guided annotation, segmentation, and multi-parameter evaluation for pixel- and geometry-based analysis.',
    technologies: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'Keras', 'Computer Vision'],
    githubUrl: 'https://github.com/cepdnaclk/e19-4yp-Quality-Assessment-of-Final-Root-Canal-Treatment-Using-Intra-Oral-Periapical-Radiographs',
    category: 'Research Project',
  },
  {
    id: 'project-2',
    title: 'RNA Velocity Reliability in Low-Dimensional Projections',
    description: 'Investigated RNA velocity reliability by benchmarking custom autoencoder architectures against traditional methods (PCA, t-SNE, UMAP) across 4 biological datasets. Demonstrated that denoising autoencoders significantly outperform standard approaches in preserving local neighborhood structure and velocity field coherence.',
    technologies: ['Python', 'PyTorch', 'Autoencoders', 'VAEs', 'scVelo', 'Velocyto', 'PCA', 't-SNE', 'UMAP'],
    githubUrl: 'https://github.com/chandula00',
    category: 'Research Project',
  },
  {
    id: 'project-3',
    title: 'BeeZee: Smart Beehive Monitoring System',
    description: 'Collaborative research with Faculty of Agriculture to detect early signs of bee colony abscondment. Designed cloud-connected data collection unit with sensors (CO₂, humidity, temperature, weight) and camera. Implemented pollen-carrying bee detection using YOLOv8 and StrongSORT for object tracking.',
    technologies: ['Raspberry Pi', 'AWS (S3, IoT Core, Lambda)', 'Node.js', 'MongoDB', 'YOLOv8', 'StrongSORT'],
    githubUrl: 'https://github.com/cepdnaclk/e19-3yp-beehive-monitoring-system',
    liveUrl: 'https://cepdnaclk.github.io/e19-3yp-beehive-monitoring-system/',
    category: 'IoT & Computer Vision',
  },
  {
    id: 'project-4',
    title: 'CricVision: Optimizing Dynamic Batting Orders in T20 Cricket',
    description: 'Data-driven system to dynamically optimize batting orders in T20 cricket using machine learning. Built multi-output regression pipeline to predict batter performance, final team score, and Net Run Rate. Deployed via Flask for real-time insights.',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Flask', 'Pandas', 'BeautifulSoup', 'Matplotlib'],
    githubUrl: 'https://github.com/cepdnaclk/e19-co544-cricket-analytics-and-prediction',
    liveUrl: 'https://cepdnaclk.github.io/e19-co544-cricket-analytics-and-prediction/',
    category: 'Machine Learning',
  },
  {
    id: 'project-5',
    title: 'Optimized MPSoC Design for Low-Resource JPEG Encoding',
    description: 'Proposed a pipelined MPSoC architecture for efficient JPEG encoding using Altera Nios II/e cores on Cyclone IV FPGA. Integrated custom instructions, FIFO-based inter-core communication, and superscalar enhancements to maximize throughput. Published in IEEE Xplore (ICAC 2024).',
    technologies: ['Verilog HDL', 'FPGA', 'Nios II', 'Quartus II', 'Embedded Systems'],
    githubUrl: 'https://github.com/chandula00',
    category: 'Embedded Systems',
  },
  {
    id: 'project-6',
    title: 'Obstacle Robot Swarm for Swarm Robotic Project',
    description: 'Automated robot for swarm robotic arena that can move to desired positions, avoid collisions, and be programmed as static or dynamic obstacles. Updated firmware to support autonomous collision handling and integrated into existing swarm platform.',
    technologies: ['Arduino', 'Python', 'Java', 'Robotics'],
    githubUrl: 'https://github.com/Pera-Swarm',
    liveUrl: 'https://pera-swarm.ce.pdn.ac.lk/',
    category: 'Robotics',
  },
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Department of Computer Engineering, University of Peradeniya',
    position: 'Temporary Instructor (Teaching Assistant)',
    duration: 'Sep. 2025 - Present',
    description: [
      'Conducting lab sessions for undergraduate computer engineering courses',
      'Preparing tutorials and lab specification sheets',
      'Assisting students with course materials and assignments',
      'Supporting faculty in course delivery and assessment',
    ],
    technologies: ['Teaching', 'Course Development', 'Lab Instruction'],
  },
  {
    id: 'exp-2',
    company: 'OCTAVE, John Keells Holdings',
    position: 'Intern Data Scientist',
    duration: 'July 2024 - Dec. 2024',
    description: [
      'Contributed to production-grade data pipelines for enterprise solutions',
      'Developed and validated enterprise dashboards for Cinnamon Hotels',
      'Built customer segmentation solutions supporting digital marketing campaigns',
      'Worked with big data processing and cloud-based analytics platforms',
    ],
    technologies: ['Databricks', 'PySpark', 'SQL (Spark SQL & T-SQL)', 'Azure DevOps', 'MLflow', 'Power BI'],
  },
  {
    id: 'exp-3',
    company: 'cepdnaclk GitHub Organization',
    position: 'Administrator / Developer',
    duration: 'Oct. 2023 - Present',
    description: [
      'Serve as administrator for Department of Computer Engineering GitHub organization',
      'Oversee error resolution and repository management',
      'Maintain CI/CD pipelines and automation workflows',
      'Support departmental project hosting and version control',
    ],
    technologies: ['Jenkins', 'Jekyll', 'FastAPI', 'GitHub', 'CI/CD'],
  },
  {
    id: 'exp-4',
    company: 'Department of Computer Engineering, University of Peradeniya',
    position: 'Undergraduate Teaching Assistant',
    duration: 'Nov. 2023 - July 2025',
    description: [
      'Assisted in Digital Design (CO221), Computer Architecture (CO224)',
      'Supported Third Year Project (CO300), Embedded Systems (CO321)',
      'Helped with Data Structures and Algorithms (CO1030)',
      'Assisted labs, quizzes, and course materials',
      'Supported students in ARM Assembly, Verilog, AVR programming',
      'Provided project mentoring for undergraduate students',
    ],
    technologies: ['ARM Assembly', 'Verilog HDL', 'AVR', 'C/C++', 'Embedded Systems'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'University of Peradeniya',
    degree: 'BSc.Eng (Hons.) in Computer Engineering',
    duration: 'Mar. 2021 - Aug. 2025',
    description: 'Current GPA: 3.85/4.0. Specializing in computational biology, machine learning, and embedded systems. Research interests include integrating molecular biology with deep learning and computer vision for healthcare diagnostics.',
  },
  {
    id: 'edu-2',
    institution: 'Dharmaraja College, Kandy',
    degree: 'G.C.E. Advanced Level Examination',
    duration: 'Jan. 2006 - Dec. 2019',
    description: 'Z-Score: 2.2069 (Ranked 467 out of 19,500+ participants nationwide in Physical Science stream)',
  },
];

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'Optimized Multi-Processor System-on-Chip (MPSoC) Design for Low-Resource JPEG Encoding',
    authors: 'K.H. Gunawardana, R.A.J.C. Adhikari, I. Nawinne',
    venue: 'IEEE Xplore - ICAC 2024',
    year: '2024',
    description: [
      'Proposed a pipelined MPSoC architecture for efficient JPEG encoding using Altera Nios II/e cores on a Cyclone IV FPGA, integrating custom instructions, FIFO-based inter-core communication, and superscalar enhancements to maximize throughput.',
      'Presented at ICAC 2024, Published in IEEE Xplore',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'Verilog HDL', 'ARM Assembly'],
  },
  {
    category: 'Machine Learning & AI',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Keras', 'XGBoost', 'YOLO', 'Computer Vision'],
  },
  {
    category: 'Data Science & Analytics',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'PySpark', 'Databricks', 'MLflow', 'Power BI'],
  },
  {
    category: 'Web Development',
    items: ['React.js', 'Express.js', 'Node.js', 'Flask', 'Spring Boot', 'Flutter', 'HTML/CSS'],
  },
  {
    category: 'Developer Tools & Platforms',
    items: ['Git/GitHub', 'VS Code', 'IntelliJ IDEA', 'PyCharm', 'Jenkins', 'Jekyll', 'Azure DevOps', 'Unix Shell'],
  },
  {
    category: 'Specialized Skills',
    items: ['FPGA Design', 'Embedded Systems', 'IoT', 'Robotics', 'AWS', 'Firebase', 'Raspberry Pi'],
  },
];
