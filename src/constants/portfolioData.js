import githubContributions from '../assets/github.png';
import clgweb from '../assets/clgweb.png';
import movieGuesserImage from '../assets/movieguesser.png';
import chatbotImage from '../assets/chatbot2.png';

import comparing1 from '../assets/COMPARING1.jpeg';
import comparing2 from '../assets/COMPARING2.jpeg';
import comparing3 from '../assets/COMPARING3.jpeg';

import freshers1 from '../assets/FRESHERS2.jpeg';
import freshers2 from '../assets/PYWORKSHOP.jpeg';
import freshers3 from '../assets/PYTHONWORKSHOP.jpeg';
import freshers4 from '../assets/FRESHERS1.png';

import pc from '../assets/PC.jpeg';
import webteam from '../assets/clgweb.png';
import symp from '../assets/kurukshetra.png';
import codemaster from '../assets/codemaster.png'
import webteammember from '../assets/webteammember.jpeg';
export const personalInfo = {
  name: 'MADASAMY I;',
  shortName: 'Madasamy I',
  role: 'Aspiring Software Engineer',
  heroSubtitle: 'Aspiring Software Engineer',
  profileSummary:
    'Aspiring software engineer with skills in full-stack development, problem-solving, and critical thinking. Known for effective communication and leadership abilities. Passionate about innovative software solutions and continuous learning.',
  location: 'Tirunelveli',
  phone: '+91 9080192315',
  email: 'madasamyi2006@gmail.com',
  portfolio: 'https://madasamyi.me',
  resumeUrl: '/resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/madasamyi',
    github: 'https://github.com/madasamyi17',
    leetcode: 'https://leetcode.com/madasamyi',
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
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'GitHub Actions', icon: 'github-actions' },
  { name: 'PuTTY', icon: 'putty' },
  { name: 'WinSCP', icon: 'winscp' },
  { name: 'AWS', icon: 'aws' },
];

export const leadershipHighlights = [
  {
    id: 1,
    title: 'Placement Coordinator - CSE Department',
    description:
      'Serving as Placement Coordinator for the CSE department for three years, supporting placement activities, communication, and student coordination.',
    images: [pc],
  },
  {
    id: 2,
    title: 'Freshers Association Coordinator',
    description:
      'Coordinating freshers association activities at ACCET, conducting workshops, organizing events, and contributing to media and documentation.',
    images: [freshers1, freshers2, freshers3, freshers4],
  },
  {
    id: 3,
    title: 'Anchoring & Public Speaking',
    description:
      'Anchored multiple college cultural events and developed strong public speaking and stage communication skills.',
    images: [comparing1, comparing2,comparing3],
  },
];

export const experiences = [
  {
    id: 1,
    title: 'ACGCET Website Team Member',
    company: 'accet.ac.in',
    stack: ['React JS', 'Express JS', 'MySQL', 'AWS'],
    liveLink: 'https://accet.ac.in',
    imageUrls: [clgweb, webteammember],
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
    image: movieGuesserImage,
    githubLink: 'https://github.com/madasamy_dfan',
    demoLink: '#',
  },
  {
    id: 2,
    title: 'FAISS Chatbot for ACCET',
    tags: ['Python', 'FAISS', 'LLM', 'RAG'],
    description:
      'Developed a knowledge-retrieval chatbot for ACCET content using FAISS-based vector indexing and context-aware responses.',
    image: chatbotImage,
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
    image: githubContributions,
  },
  {
    id: 2,
    title: 'CODE MASTER 2025',
    highlight: "Deftra'25 - Code Quest",
    description:
      'Won CODE MASTER 2025 award for consistent performance in Code Quest.',
    image: codemaster,
  },
  {
    id: 3,
    title: 'Technical Achievements',
    highlight: 'College Symposium Wins',
    description:
      'Participated in and won various college symposiums, including CEG Kurukshetra and many more.',
    image: symp,
  },
];
