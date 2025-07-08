
import type { NavItem, EducationItem, SkillCategory, ProjectItem, CertificateItem, PublicationItem } from '@/types';
import { Home, User, Briefcase, Code, Award, BookOpen, Link as LinkIcon, Download, Linkedin, Github, Mail, Phone, FileText } from 'lucide-react';

export const siteConfig = {
  name: 'Prashik D. Muneshwar',
  title: 'B.Tech in Electronics and Telecommunications Engineering',
  contact: {
    phone: '7020158861',
    email: 'prashikm1999@gmail.com',
  },
  summary: "Detail-oriented and versatile software developer with strong proficiency in Java, Python, C++, and JavaScript, combined with hands-on experience in full-stack web development using React, Node.js, Express.js, and EJS. Skilled in building scalable applications, RESTful APIs, and cloud-integrated solutions using AWS. Proficient in database design with SQL and MongoDB, and experienced in using developer tools such as Git, GitHub, Postman, and IntelliJ. Adept at applying concepts from machine learning, computer vision, and data structures to solve real-world problems. Continuously expanding technical depth through practical projects and industry-recognized certifications across backend, frontend, DevOps, and cloud domains.",
  resumeUrl: 'https://drive.google.com/file/d/1VfyFGfr7KPjqCsgavF038l8eLANQCbQa/view?usp=sharing',
  navItems: [
    { id: 'home', title: 'Home', icon: Home },
    { id: 'education', title: 'Education', icon: User },
    { id: 'skills', title: 'Skills', icon: Code },
    { id: 'projects', title: 'Projects', icon: Briefcase },
    { id: 'achievements', title: 'Achievements', icon: Award },
    { id: 'publications', title: 'Publications', icon: BookOpen },
    { id: 'connect', title: 'Connect', icon: LinkIcon },
  ] as NavItem[],
  education: [
    {
      degree: 'B.Tech in Electronics & Telecommunication Engineering',
      institution: 'Vishwakarma Institute of Technology, Pune',
      duration: 'Nov 2022 - May 2025 ',
      logoUrl: 'https://placehold.co/64x64.png',
      description: 'Completed Bachelor of Technology with a focus on modern electronics and communication systems, software development, and emerging technologies.'
    },
    {
      degree: 'Diploma in Electronics & Telecommunication Engineering',
      institution: 'Dr. D.Y. Patil, Y.B. Patil Polytechnic, Akurdi',
      duration: 'June 2018 - July 2022',
      logoUrl: 'https://placehold.co/64x64.png',
      description: 'Completed Diploma with a strong foundation in electronics principles, circuit design, and telecommunication fundamentals.'
    },
  ] as EducationItem[],
  skills: [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'Java' },
        { name: 'C++' },
        { name: 'Python' },
        { name: 'JavaScript' },
      ],
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'EJS' },
        { name: 'Next.js' },
      ],
    },
    {
      name: 'Databases & Cloud',
      skills: [
        { name: 'SQL' },
        { name: 'MongoDB' },
        { name: 'AWS' },
      ],
    },
    {
      name: 'Tools & IDEs',
      skills: [
        { name: 'Git & GitHub' },
        { name: 'VS Code' },
        { name: 'IntelliJ IDEA' },
        { name: 'Eclipse' },
        { name: 'Postman' },
        { name: 'Hoppscotch' },
      ],
    },
    {
      name: 'Key Concepts',
      skills: [
        { name: 'Machine Learning' },
        { name: 'Computer Vision' },
        { name: 'Object Oriented Programming' },
        { name: 'Data Structures & Algorithms' },
        { name: 'REST APIs' },
        { name: 'JSON' },
        { name: 'Blockchain' },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      title: 'Major Project: E-Learning Platform for Placements',
      description: [
        'Developed a full-stack web platform to assist students in placement preparation with interactive learning modules on DBMS, OOP, DSA, and CN, including quizzes, video content, and progress tracking.',
        'Integrated Gemini AI for real-time ATS-friendly resume generation and Jitsi Meet for daily group discussions to improve communication skills.',
        'Implemented secure authentication via Clerk (Google/GitHub), used Strapi CMS for scalable backend management, and built a responsive UI using React.js and Tailwind CSS.',
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Strapi CMS', 'Gemini AI', 'Clerk', 'Jitsi Meet'],
    },
    {
      title: 'Smart Attendance System Using Face Recognition',
      description: [
        'Developed an attendance system which trains face using Python.',
        'Implemented face training and saving the attendance using computer vision.',
        'Created CSV file in which the attendance is stored with the help of machine learning.',
      ],
      technologies: ['Python', 'Computer Vision', 'Machine Learning', 'OpenCV'],
    },
    {
      title: 'Documentary Authenticity: Manipulation Detection',
      description: [
        'Developed a Python-based solution using OpenCV for detecting manipulations in documentary footage.',
        'Implemented computer vision techniques to identify and flag instances of object removal.',
        'Ensured the authenticity of documentary films by maintaining the integrity of visual content.',
      ],
      technologies: ['Python', 'OpenCV', 'Computer Vision'],
    },
    {
      title: 'GoVote: E-Voting System using Blockchain',
      description: [
        'Designed and implemented a secure e-voting system using blockchain technology.',
        'Integrated Metamask for user authentication and secure transaction management.',
        'Ensured transparency and immutability in the voting process through blockchain.',
      ],
      technologies: ['Blockchain', 'Metamask', 'Smart Contracts'],
    },
  ] as ProjectItem[],
  achievements: [
    { name: 'IBM Full Stack Software Developer', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/HB0ML4UMMFGA', issuer: 'IBM on Coursera' },
    { name: 'IBM Front-End Developer', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ALX33S7IF07K', issuer: 'IBM on Coursera' },
    { name: 'IBM Back-End Development', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/GW6DTYYN99TT', issuer: 'IBM on Coursera' },
    { name: 'Google Cybersecurity', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/R9X4OFMJT03Y', issuer: 'Google on Coursera' },
    { name: 'IBM DevOps and Software Engineering', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/BSUD50A08803', issuer: 'IBM on Coursera' },
    { name: 'AWS Cloud Technology Consultant', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/GXGQ20CTCE1B', issuer: 'AWS on Coursera' },
    { name: 'Fundamentals of Deep Learning', link: 'https://learn.nvidia.com/certificates?id=712b9c2946144700abc689c0abcf086b', issuer: 'NVIDIA DLI' },
    { name: 'Getting Started with Git and GitHub', link: 'https://www.coursera.org/account/accomplishments/certificate/94NA5887B9CQ', issuer: 'Coursera Project Network' },
    { name: 'IBM AI Developer', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/FK8A8VC186JF', issuer: 'IBM on Coursera' },
  ] as CertificateItem[],
  publications: [
    { title: 'Smart Attendance System Using Face Recognition', link: 'https://drive.google.com/file/d/1pRNo8Vyfbao9uLjCaANT3R75VWy2Um_D/view' },
    { title: 'Navigating SAP ERP Implementation: Identifying Success Drivers and Pitfalls', link: 'https://drive.google.com/file/d/1yJqIZDXrxMxfn_yD0J4mji1Xxk0HY4bg/view' },
    { title: 'GoVote: E-Voting System using Blockchain', link: 'https://drive.google.com/file/d/1xG05YrcfhbbwZsYQ8IaIVBvJgDktSloG/view' },
  ] as PublicationItem[],
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/prashik-muneshwar/',
    github: 'https://github.com/PRASHIK-99',
  },
  icons: {
    Home, User, Briefcase, Code, Award, BookOpen, LinkIcon, Download, Linkedin, Github, Mail, Phone, FileText
  }
};
