export const personalInfo = {
  name: 'MADASAMY I',
  shortName: 'Madasamy I',
  role: 'Aspiring Software Engineer',
  heroSubtitle: 'Aspiring Software Engineer',
  profileSummary:
    'Aspiring software engineer with skills in full-stack development, problem-solving, and critical thinking. Known for effective communication and leadership abilities. Passionate about innovative software solutions and continuous learning.',
  location: 'Suthamalli, Tirunelveli',
  phone: '+91 9080192315',
  email: 'madasamyi2006@gmail.com',
  portfolio: 'https://itzinr.vercel.app',
  resumeUrl: '/resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/madasamy_dfan',
    github: 'https://github.com/madasamy_dfan',
    leetcode: 'https://leetcode.com/madasamy_fan',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contacts' },
];

export const education = {
  college:
    'Alagappa Chettiar Government College of Engineering and Technology, Karaikudi',
  degree: 'B.E. Computer Science and Engineering',
  cgpa: '8.8/10.0',
  timeline: 'March 2024 - Expected 2027',
};

export const technicalSkills = [
  { name: 'Java', icon: 'java' },
  { name: 'Python', icon: 'python' },
  { name: 'C', icon: 'c' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React JS', icon: 'react' },
  { name: 'Express JS', icon: 'express' },
  { name: 'Spring Boot', icon: 'spring' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'GitHub Actions', icon: 'github-actions' },
  { name: 'AWS', icon: 'aws' },
];

export const leadershipHighlights = [
  {
    id: 1,
    title: 'Placement Coordinator - CSE Department',
    description:
      'Serving as Placement Coordinator for the CSE department for three years, supporting placement activities, communication, and student coordination.',
    images: ['/leadership-placement-1.jpg', '/leadership-placement-2.jpg'],
  },
  {
    id: 2,
    title: 'Freshers Association Coordinator',
    description:
      'Coordinating freshers association activities at ACCET, conducting workshops, organizing events, and contributing to media and documentation.',
    images: ['/leadership-freshers-1.jpg', '/leadership-freshers-2.jpg'],
  },
  {
    id: 3,
    title: 'Anchoring & Public Speaking',
    description:
      'Anchored multiple college cultural events and developed strong public speaking and stage communication skills.',
    images: ['/leadership-anchoring-1.jpg', '/leadership-anchoring-2.jpg'],
  },
];

export const experiences = [
  {
    id: 1,
    title: 'ACGCET Website Team Member',
    company: 'ACGCET Official Website Team',
    stack: ['React JS', 'Express JS', 'MySQL', 'AWS'],
    liveLink: 'https://accet.ac.in',
    videoUrl: '',
    points: [
      'Developed and maintained key modules of the ACGCET official website, including Semester Results for Part-Time and M.E. students, with secure authentication and role-based access.',
      'Managed deployment on AWS Lightsail, integrated S3/SES/CDN, automated CI/CD with GitHub Actions, and resolved critical backend and security issues.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'MovieGuesser - A Movie Guessing Game',
    tags: ['React JS', 'Express JS', 'MySQL', 'AWS'],
    description:
      'Built an interactive movie guessing game with a dynamic question flow and real-time scoring logic for engaging gameplay.',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    githubLink: 'https://github.com/madasamy_dfan',
    demoLink: '#',
  },
  {
    id: 2,
    title: 'FAISS Chatbot for ACCET',
    tags: ['Python', 'FAISS', 'LLM', 'RAG'],
    description:
      'Developed a knowledge-retrieval chatbot for ACCET content using FAISS-based vector indexing and context-aware responses.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    githubLink: 'https://github.com/madasamy_dfan',
    demoLink: '#',
  },
  {
    id: 3,
    title: 'Movie Recommender System',
    tags: ['Python', 'Machine Learning', 'Recommendation'],
    description:
      'Implemented a personalized movie recommendation engine using similarity models and content-based filtering techniques.',
    image:
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    githubLink: 'https://github.com/madasamy_dfan',
    demoLink: '#',
  },
];

export const achievements = [
  {
    id: 1,
    title: 'GitHub Contributions (2026)',
    highlight: '1.2K Contributions This Year',
    description:
      'Consistent daily coding and open-source activity across personal and collaborative repositories.',
    image: '/github-contributions.png',
  },
  {
    id: 2,
    title: 'CODE MASTER 2025',
    highlight: "Deftra'25 - Code Quest",
    description:
      'Won CODE MASTER 2025 award for consistent performance in Code Quest.',
    image: '',
  },
  {
    id: 3,
    title: 'Technical Achievements',
    highlight: 'College Symposium Wins',
    description:
      'Participated in and won various college symposiums, including CEG Kurukshetra and many more.',
    image: '',
  },
];
