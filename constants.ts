import { Project } from './types';

export const INTRO_TEXT = "WELCOME TO BeepBoop_OS v1.0. SYSTEM READY.";

export const PROJECTS: Project[] = [
  {
    title: "LLM to text chat app + workflow",
    description: "A LLM model finetuned on game script and made into discord chatbot",
    tech: ["Python", "Pytorch", "Transformers", "Discord API"],
    link: "https://huggingface.co/pineappleSoup/DialoGPT-medium-707"
  },
  {
    title: "LTE Campus",
    description: "A top-down simulation of a school which increased the class enrollment.",
    tech: ["Game Maker Language", "Game Maker Studio"],
    link: "https://github.com/ShuangAnatoli/LTECampus"
  },
  {
    title: "University Forum System with Role-based Privileges",
    description: "Secure full-stack system with role-based security.",
    tech: ["PHP", "JavaScript", "Sass", "MySQL Server"],
    link: "https://github.com/ShuangAnatoli/UniversityForumSystem"
  }
];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/ShuangAnatoli", username: "@ShuangAnatoli" },
  { platform: "HuggingFace", url: "https://huggingface.co/pineappleSoup", username: "@pineappleSoup" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/swann-su-htet/", username: "Swann Su Htet" }
];