import type { Project, Experience, Education, Skill, Publication, Achievement, NewsItem, Certificate } from '../types';

export const personalInfo = {
  name: 'Chandula Adhikari',
  title: 'Research Assistant, MARC — Computational Biology & Machine Learning',
  email: 'rajcadhikari@gmail.com',
  location: 'University of Peradeniya, Sri Lanka',
  phone: '+94 711530046',
  github: 'https://github.com/chandula00',
  linkedin: 'https://www.linkedin.com/in/janith-chandula-adhikari-5543a5223',
  bio: 'I work on machine learning shaped by the biology it describes, rather than generic architectures borrowed from other domains. My focus is single-cell genomics: how genes are regulated, how cells change state, and what can be recovered from sparse, noisy measurements.',
  image: '/profile-image.jpg',
  resumeUrl: 'https://chandula00.github.io/Documents/Resume_Chandula.pdf',
  researchStatement: [
    'I work on machine learning **shaped by the biology it describes**, rather than generic architectures borrowed from other domains. My focus is **single-cell genomics**: how genes are regulated, how cells change state, and what can be recovered from sparse, noisy measurements.',
    'More broadly, I am drawn to **generative modelling across biomedical data**. I want a model\'s assumptions to stay clear enough for biologists and clinicians to question them.',
  ],
  researchInterests: [
    'Single-Cell Genomics',
    'Generative Modelling',
    'RNA Velocity & Trajectory Inference',
    'Discrete Diffusion Models',
    'Gene Regulation',
    'Machine Learning for Biology',
    'Explainable AI',
    'Biomedical Imaging',
  ],
};

export const news: NewsItem[] = [
  {
    id: 'news-1',
    date: '2026',
    category: 'Award',
    title: 'TARVI wins Best Paper Award at MERCon 2026 (IEEE)',
    description:
      'Best Paper in the Biomedical Engineering & Instrumentation track for "TARVI: Transcription-Factor Aided RNA Velocity Inference with Supervised Latent Time".',
    url: 'https://chandula00.github.io/TARVI/',
    urlLabel: 'Project page',
    highlight: true,
  },
  {
    id: 'news-2',
    date: '2026',
    category: 'Certification',
    title: 'Completed a 100-hour Certificate Course in Molecular Biology & Biotechnology',
    description:
      'Wet-lab and bioinformatics training at the Agricultural Biotechnology Centre, University of Peradeniya — gene regulation, NGS and Sanger sequencing, recombinant DNA cloning, Nanopore transcriptomics and molecular phylogenetics.',
  },
  {
    id: 'news-3',
    date: '2026',
    category: 'Preprint',
    title: 'Discrete diffusion paper for scRNA-seq imputation under review at AAAI 2027',
    description:
      '"Dropout Is the Absorbing State: Discrete Diffusion for Single-Cell Gene Expression Imputation" — best rank correlation and lowest log-scale RMSE against 9 baselines on every dataset tested.',
    highlight: true,
  },
  {
    id: 'news-4',
    date: 'June 2026',
    category: 'Position',
    title: 'Joined the Multidisciplinary AI Research Centre (MARC) as a Research Assistant',
    description:
      'Leading two research groups at the centre: the Computational Biology & Bioinformatics pillar, and Generative AI for Dermatology.',
    url: 'https://www.linkedin.com/company/multidisciplinaryai',
    urlLabel: 'MARC',
    highlight: true,
  },
  {
    id: 'news-5',
    date: 'Dec. 2025',
    category: 'Publication',
    title: 'T20I cricket analysis paper published at ICATC 2025 (IEEE Xplore)',
    description:
      '"Uncovering Hidden Temporal Patterns in T20I Cricket Through Ball-by-Ball Data Analysis" — 165,000+ deliveries across 1,200+ matches from 2006 to 2025.',
    url: 'https://doi.org/10.1109/ICATC68823.2025.11407838',
    urlLabel: 'DOI',
  },
  {
    id: 'news-6',
    date: 'Sep. 2025',
    category: 'Position',
    title: 'Appointed Temporary Instructor, Department of Computer Engineering',
    description:
      'Teaching laboratory sessions and supervising undergraduate project work, after three years as an Undergraduate Teaching Assistant.',
    url: 'https://people.ce.pdn.ac.lk/staff/temporary-academic-staff/',
    urlLabel: 'Department',
  },
  {
    id: 'news-7',
    date: 'Aug. 2025',
    category: 'Milestone',
    title: 'Graduated BSc.Eng (Hons.) in Computer Engineering with First Class',
    description:
      'Overall GPA 3.85/4.00, with a final-year GPA of 4.00/4.00.',
  },
  {
    id: 'news-8',
    date: 'Jan. 2025',
    category: 'Publication',
    title: 'MPSoC JPEG encoding paper published at ICAC 2024 (IEEE Xplore)',
    description:
      'A pipelined multi-processor system-on-chip architecture for low-resource JPEG encoding on a Cyclone IV FPGA.',
    url: 'https://doi.org/10.1109/ICAC64487.2024.10851123',
    urlLabel: 'DOI',
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'TARVI: Transcription-Factor Aided RNA Velocity Inference',
    description:
      'Replaced the static per-gene transcription rate used by existing RNA velocity models with cell-specific, TF-regulated rates, injecting a masked learnable TF→gene matrix derived from ENCODE ChIP-seq and ChEA priors into a variational autoencoder. A supervised latent-time head trained with ODE-residual, self-distillation and graph-Laplacian smoothness losses improved pseudotime calibration by 126% over VeloVI across 5 single-cell datasets.',
    technologies: ['Python', 'PyTorch', 'VAEs', 'scVelo', 'Scanpy', 'ENCODE ChIP-seq', 'ChEA'],
    githubUrl: 'https://github.com/chandula00/TARVI',
    liveUrl: 'https://chandula00.github.io/TARVI/',
    category: 'Single-Cell Genomics',
  },
  {
    id: 'project-2',
    title: 'AI-Assisted Quality Assessment of Root Canal Treatment',
    description:
      'Explainable AI framework for automated root canal treatment quality assessment using 1,000 anonymized intraoral periapical radiographs. The four-stage pipeline — dataset curation, expert-guided annotation, segmentation, and multi-parameter evaluation — enables pixel- and geometry-based analysis of filling length, lateral seal, voids, and irregularities.',
    technologies: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'Keras', 'Explainable AI'],
    githubUrl:
      'https://github.com/cepdnaclk/e19-4yp-Quality-Assessment-of-Final-Root-Canal-Treatment-Using-Intra-Oral-Periapical-Radiographs',
    category: 'Biomedical Imaging',
  },
  {
    id: 'project-3',
    title: 'Reliability of RNA Velocity in Low-Dimensional Projections',
    description:
      'Benchmarked custom autoencoder architectures against standard embeddings (PCA, t-SNE, UMAP) across 4 biological datasets, showing that denoising autoencoders better preserve local neighbourhood structure and velocity-field coherence — establishing that the embedding, not the velocity estimator alone, limits trajectory inference. The findings motivated and fed directly into TARVI.',
    technologies: ['Denoising Autoencoders', 'VAEs', 'scVelo', 'Velocyto', 'PCA', 't-SNE', 'UMAP'],
    githubUrl: 'https://github.com/chandula00',
    category: 'Single-Cell Genomics',
  },
  {
    id: 'project-4',
    title: 'BeeZee: Smart Beehive Monitoring System',
    description:
      'Collaborative research with the Faculty of Agriculture, University of Peradeniya to detect early signs of bee colony abscondment. Designed a cloud-connected data collection unit with sensors (CO₂, humidity, temperature, weight) and camera, integrated into a real-time dashboard, with pollen-carrying bee detection using YOLOv8 and StrongSORT.',
    technologies: ['Raspberry Pi', 'AWS (S3, IoT Core, Lambda)', 'Node.js', 'MongoDB', 'YOLOv8', 'StrongSORT'],
    githubUrl: 'https://github.com/cepdnaclk/e19-3yp-beehive-monitoring-system',
    liveUrl: 'https://cepdnaclk.github.io/e19-3yp-beehive-monitoring-system/',
    category: 'IoT & Computer Vision',
  },
  {
    id: 'project-5',
    title: 'CricVision: Optimizing Dynamic Batting Orders in T20 Cricket',
    description:
      'Data-driven system to dynamically optimize batting orders in T20 cricket using machine learning. Built a multi-output regression pipeline to predict batter performance, final team score, and Net Run Rate, deployed via Flask for real-time insights.',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Flask', 'Pandas', 'BeautifulSoup'],
    githubUrl: 'https://github.com/cepdnaclk/e19-co544-cricket-analytics-and-prediction',
    liveUrl: 'https://cepdnaclk.github.io/e19-co544-cricket-analytics-and-prediction/',
    category: 'Machine Learning',
  },
  {
    id: 'project-6',
    title: 'Optimized MPSoC Design for Low-Resource JPEG Encoding',
    description:
      'Pipelined MPSoC architecture for efficient JPEG encoding using Altera Nios II/e cores on a Cyclone IV FPGA. Integrated custom instructions, FIFO-based inter-core communication, and superscalar enhancements to maximize throughput. Published in IEEE Xplore (ICAC 2024).',
    technologies: ['Verilog HDL', 'FPGA', 'Nios II', 'Quartus II', 'Embedded Systems'],
    githubUrl: 'https://github.com/chandula00/CO503-Advanced-Embedded-Systems-Labs',
    category: 'Embedded Systems',
  },
];

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Multidisciplinary AI Research Centre (MARC), University of Peradeniya',
    position: 'Research Assistant',
    duration: 'June 2026 - Present',
    description: [
      'Research post at the University of Peradeniya\'s interdisciplinary AI centre, which coordinates machine learning across engineering, medicine and the life sciences',
      'Lead two research groups at the centre: the Computational Biology & Bioinformatics pillar, and Generative AI for Dermatology',
      'Work carried out in this post produced the absorbing-state discrete diffusion imputation model currently under review at AAAI 2027',
    ],
    technologies: ['PyTorch', 'Diffusion Models', 'Transformers', 'Scanpy', 'Single-Cell Genomics'],
    logo: '/uop_logo.png',
    url: 'https://www.linkedin.com/company/multidisciplinaryai',
  },
  {
    id: 'exp-2',
    company: 'Department of Computer Engineering, University of Peradeniya',
    position: 'Temporary Instructor',
    duration: 'Sep. 2025 - June 2026',
    description: [
      'Conducted laboratory sessions for undergraduate computer engineering courses',
      'Prepared tutorials and lab specification sheets',
      'Supervised and mentored student project work',
    ],
    technologies: ['Teaching', 'Course Development', 'Lab Instruction'],
    logo: '/uop_logo.png',
    url: 'https://people.ce.pdn.ac.lk/staff/temporary-academic-staff/',
  },
  {
    id: 'exp-3',
    company: 'OCTAVE, John Keells Holdings',
    position: 'Intern Data Scientist',
    duration: 'July 2024 - Dec. 2024',
    description: [
      'Built and validated production-grade data pipelines over large enterprise datasets',
      'Developed customer segmentation models that directly supported live digital marketing campaigns',
      'Developed and validated enterprise dashboards for Cinnamon Hotels',
      'End-to-end data science workflow, reproducibility and experiment tracking that transfers to large-scale genomic data analysis',
    ],
    technologies: ['Databricks', 'PySpark', 'SQL (Spark SQL & T-SQL)', 'Azure DevOps', 'MLflow', 'Power BI'],
    logo: '/octave.png',
    url: 'https://www.octave.lk/',
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
      'Supported students in ARM Assembly, Verilog and AVR programming',
      'Provided project mentoring for undergraduate students',
    ],
    technologies: ['ARM Assembly', 'Verilog HDL', 'AVR', 'C/C++', 'Embedded Systems'],
    logo: '/uop_logo.png',
    url: 'https://people.ce.pdn.ac.lk/students/e19/008/',
  },
  {
    id: 'exp-5',
    company: 'cepdnaclk GitHub Organization',
    position: 'Administrator / Developer',
    duration: 'Oct. 2023 - Present',
    description: [
      'Serve as administrator for the Department of Computer Engineering GitHub organization',
      'Oversee error resolution and repository management',
      'Maintain CI/CD pipelines and automation workflows',
      'Support departmental project hosting and version control',
    ],
    technologies: ['Jenkins', 'Jekyll', 'FastAPI', 'GitHub', 'CI/CD'],
    logo: '/uop_logo.png',
    url: 'https://github.com/orgs/cepdnaclk/teams/admins-cepdnaclk-github-io',
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'University of Peradeniya',
    degree: 'BSc.Eng (Hons.) in Computer Engineering',
    duration: 'Mar. 2021 - Aug. 2025',
    description: 'Overall GPA: 3.85/4.00\nFinal-Year GPA: 4.00/4.00',
    logo: '/uop_logo.png',
    badges: ['Computer Engineering', 'B.Sc. Engineering (Hons.)', 'First Class'],
  },
  {
    id: 'edu-2',
    institution: 'Dharmaraja College, Kandy',
    degree: 'G.C.E. Advanced Level Examination',
    duration: 'Jan. 2006 - Dec. 2019',
    description: 'Z-Score: 2.2069\nRanked 467 out of 19,500+ participants nationwide in the Physical Science stream',
    logo: '/dharmaraja.png',
    badges: ['Physical Science', 'Advanced Level'],
  },
];

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'TARVI: Transcription-Factor Aided RNA Velocity Inference with Supervised Latent Time',
    authors: 'R.A.J.C. Adhikari, S. Dassanayake, D. Herath',
    venue: 'MERCon 2026 (IEEE)',
    year: '2026',
    award: 'Best Paper Award — Biomedical Engineering & Instrumentation',
    description: [
      'Replaced the static per-gene transcription rate used by existing RNA velocity models with cell-specific, TF-regulated rates, injecting a masked learnable TF→gene matrix derived from ENCODE ChIP-seq and ChEA regulatory priors into a variational autoencoder — a knowledge-guided constraint that makes the model\'s regulatory assumptions explicit and inspectable.',
      'Introduced a supervised latent-time head trained with ODE-residual, self-distillation and graph-Laplacian smoothness losses, plus post-hoc velocity–pseudotime blending that grounds local velocity vectors in global trajectory topology.',
      'Improved pseudotime calibration by 126% over VeloVI (Spearman 0.747 vs. 0.331) across 5 single-cell datasets (pancreas, bone marrow, forebrain, chromaffin, scEU organoid), while matching the strongest of 4 baselines on directional metrics.',
    ],
    url: 'https://chandula00.github.io/TARVI/',
    codeUrl: 'https://github.com/chandula00/TARVI',
  },
  {
    id: 'pub-2',
    title: 'Dropout Is the Absorbing State: Discrete Diffusion for Single-Cell Gene Expression Imputation',
    authors: 'R.A.J.C. Adhikari et al.',
    venue: 'AAAI 2027',
    year: '2027',
    status: 'Under review',
    description: [
      'Reformulated scRNA-seq dropout as the absorbing state of a discrete diffusion process: expression is tokenized into per-gene quantile bins and only candidate dropout entries are corrupted toward a reserved [MASK] state, so measured entries stay immutable, non-negativity holds by construction, and each gene receives a full categorical distribution rather than a conditional mean.',
      'Designed a role-conditioned Transformer denoiser and a confidence-first parallel decoding scheme that exploits the monotonicity of the absorbing chain to reconstruct the matrix in a few passes instead of a full ancestral trajectory.',
      'Against 9 baselines (MAGIC, scImpute, SAVER, ALRA, DCA, scVI, scIGANs, scIDPMs) on 4 simulated datasets at 50–72% dropout, achieved the best rank correlation (ρ 0.90–0.94) and lowest log-scale RMSE (0.55–0.61) on every dataset, and won 20 of 21 cell-type clustering views across 3 real datasets.',
    ],
  },
  {
    id: 'pub-3',
    title: 'Uncovering Hidden Temporal Patterns in T20I Cricket Through Ball-by-Ball Data Analysis',
    authors: 'R.A.J.C. Adhikari et al.',
    venue: 'ICATC 2025 — IEEE Xplore',
    year: '2025',
    description: [
      'Analyzed 165,000+ deliveries from 1,200+ T20I matches (2006–2025) to identify temporal patterns in batting and bowling performance across powerplay, middle, and death overs.',
    ],
    url: 'https://doi.org/10.1109/ICATC68823.2025.11407838',
  },
  {
    id: 'pub-4',
    title: 'Optimized Multi-Processor System-on-Chip (MPSoC) Design for Low-Resource JPEG Encoding',
    authors: 'K.H. Gunawardana, R.A.J.C. Adhikari, I. Nawinne',
    venue: 'ICAC 2024 — IEEE Xplore',
    year: '2024',
    description: [
      'Proposed a pipelined MPSoC architecture for efficient JPEG encoding using Altera Nios II/e cores on a Cyclone IV FPGA, integrating custom instructions, FIFO-based inter-core communication, and superscalar enhancements to maximize throughput.',
    ],
    url: 'https://doi.org/10.1109/ICAC64487.2024.10851123',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'IEEEXtreme 17.0',
    organization: 'IEEE',
    date: 'Nov. 2023',
    description: 'Global Rank 174 (Out of 7,091 teams) | Team: Five4Five | 24-hour global algorithmic programming competition',
    url: 'https://ieeextreme.org/ieeextreme-17-0-ranking/',
  },
  {
    id: 'ach-2',
    title: 'MoraXtream 8.0',
    organization: 'IEEE Student Branch, University of Moratuwa',
    date: 'Nov. 2023',
    description: 'National Rank 4 (Out of 450+ teams) | Team: Five4Five | 12-hour algorithmic programming competition',
  },
  {
    id: 'ach-3',
    title: 'ACES Coders v10.0',
    organization: 'Association of Computer Engineering Students (ACES), University of Peradeniya',
    date: 'Oct. 2023',
    description: 'National Rank 8 (Out of 350+ participants) | Team: Five4Five | 12-hour algorithmic programming competition',
  },
  {
    id: 'ach-4',
    title: 'ACES PreCoders v10.0',
    organization: 'Association of Computer Engineering Students (ACES), University of Peradeniya',
    date: 'Sep. 2023',
    description: 'Rank 2 (Out of 50+ teams) | Team: Five4Five | 6-hour algorithmic programming competition',
  },
  {
    id: 'ach-5',
    title: 'NBQSA National ICT Awards',
    organization: 'National Best Quality Software Awards',
    date: 'Aug. 2023',
    description: 'Participation with Merit | IntelliSwitcher : Intelligent Domestic Energy Optimizing System',
    url: 'https://github.com/IntelliSwitcher',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Certificate Course in Molecular Biology & Biotechnology (100 hours)',
    issuer: 'Agricultural Biotechnology Centre, University of Peradeniya',
    date: '2026',
    description:
      'Formal wet-lab and bioinformatics training taken to ground my computational work in experimental biology: gene expression regulation and mechanisms, next-generation and Sanger sequencing, genome organization, recombinant DNA cloning, DNA/RNA extraction, PCR, and gel electrophoresis; bioinformatics modules on NCBI resources, primer design, Nanopore transcriptomics analysis, and molecular phylogenetics. (40h theory, 40h practical, 20h assessed independent work.)',
  },
  {
    id: 'cert-2',
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI (Coursera)',
    date: 'Apr. 2024',
    description: 'Supervised Machine Learning: Regression and Classification; Advanced Learning Algorithms.',
    url: 'https://coursera.org/share/c0d953d1c02645962a825bd697413435',
  },
  {
    id: 'cert-3',
    title: 'Python for Data Science, AI and Development',
    issuer: 'IBM & Coursera',
    date: 'Mar. 2023',
    url: 'https://courses.edx.org/certificates/a2edf86bf72a4bd088f045e94203f3f6',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'Verilog HDL', 'ARM Assembly'],
  },
  {
    category: 'Machine & Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face Transformers', 'XGBoost'],
  },
  {
    category: 'Model Classes',
    items: [
      'Transformers',
      'Diffusion Models (DDPM/DDIM)',
      'Absorbing-State Discrete Diffusion',
      'VAEs & Autoencoders',
      'CNNs',
      'ODE-Constrained Neural Models',
    ],
  },
  {
    category: 'Single-Cell & Bioinformatics',
    items: [
      'Scanpy',
      'AnnData',
      'scVelo',
      'Velocyto',
      'Seurat',
      'ENCODE ChIP-seq & ChEA',
      'Trajectory Inference',
      'Dropout Imputation',
      'Cell-Type Clustering',
    ],
  },
  {
    category: 'Data & Cloud',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenCV', 'Databricks', 'PySpark', 'SQL', 'MLflow', 'Azure DevOps', 'AWS', 'Power BI'],
  },
  {
    category: 'Developer Tools',
    items: ['Git/GitHub', 'Unix Shell', 'Linux/HPC', 'VS Code', 'PyCharm/IntelliJ', 'LaTeX', 'Jekyll', 'Jenkins'],
  },
  {
    category: 'Web Frameworks',
    items: ['React.js', 'Express.js', 'Flutter', 'Spring Boot', 'FastAPI'],
  },
];
