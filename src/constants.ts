import { 
  Home, 
  User, 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  MapPin, 
  Calendar, 
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Send
} from 'lucide-react';

import getExperience from './CountExperience.tsx'

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const PERSONAL_INFO = {
  name: "AMBHUJ SHARMA",
  title: "SOFTWARE ENGINEER",
  bio: "I'm a New Delhi based Software & front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent websites and mobile applications that improve the lives of those around me.",
  experience: getExperience("2022-03-01"),
  location: "Gurgaon, Haryana, India",
  status: "Available",
  email: "88ambhujsharma@gmail.com",
  phone: "+91 97176 27789",
  linkedin: "https://www.linkedin.com/in/ambhuj-sharma1999",
  instagram: "@ambhuj.0007",
  expertIn: ["React", "Next.js", "Angular", "Node.js", "JavaScript", "TypeScript"]
};

export const SKILLS = [
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "NodeJs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Gitlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
];

export const EXPERIENCE_EDUCATION = [
  {
    type: 'experience',
    period: '2022 - PRESENT',
    title: 'SOFTWARE ENGINEER – SEARCE',
    description: 'As a Software Engineer at Searce I develop and maintain web applications using React, Next, Angular, and Node.js. I have a proven track record of successfully delivering projects for clients across various industries. My focus is on building intuitive, responsive, and secure web solutions that meet the needs and expectations of end-users',
    icon: Briefcase
  },
  {
    type: 'education',
    period: '2016 - 2020',
    title: 'B.TECH – B K BIRLA INSTITUTE OF ENGINEERING & TECHNOLOGY',
    description: 'Completed Bachelor of Technology, majoring in Computer Science from B k Birla Institute of Engineering & Technology, Pilani, Rajasthan.',
    icon: GraduationCap
  },
  {
    type: 'experience',
    period: '2014 - 2015',
    title: 'SALES BOY – PARK AVENUE',
    description: 'I worked as a salesman at Park Avenue, part of the Raymond Group. My role involved assisting customers in finding their desired clothing items and managing customer interactions to boost sales.',
    icon: Briefcase
  },
  {
    type: 'education',
    period: '2014',
    title: 'SCHOOLING – CBSE BOARD',
    description: 'Completed 10+2 from Govt Sarvodaya Vidyala Delhi',
    icon: GraduationCap
  }
];
