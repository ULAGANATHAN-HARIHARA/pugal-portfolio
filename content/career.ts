export type CareerItem = {
  year: string;
  code: string;
  title: string;
  type: string;
  text: string;
  tags: string[];
};

export const career: CareerItem[] = [
  {
    year: "2026",
    code: "OFFER / 001",
    title: "CAPGEMINI",
    type: "A4 ANALYST",
    text:
      "Selected for an A4 Analyst role with a focus on networking and connectivity. This is an offer milestone, not presented as current work experience.",
    tags: ["NETWORKING", "CONNECTIVITY", "IT"],
  },
  {
    year: "2026",
    code: "RESEARCH / 002",
    title: "IEEE ICNPCV",
    type: "RESEARCH / PUBLICATION",
    text:
      "Research work on a Vision Transformer–based framework for detection and classification of AI-generated images and videos, accepted for presentation/publication at IEEE ICNPCV 2026.",
    tags: ["VISION TRANSFORMER", "DEEPFAKE", "COMPUTER VISION"],
  },
  {
    year: "2025",
    code: "INTERNSHIP / 003",
    title: "INFOSYS SPRINGBOARD",
    type: "AI VIRTUAL INTERNSHIP",
    text:
      "Selected for an Infosys Springboard AI virtual internship, building practical exposure across artificial intelligence and applied project work.",
    tags: ["AI", "MACHINE LEARNING", "PROJECTS"],
  },
  {
    year: "2022—2026",
    code: "EDUCATION / 004",
    title: "B.TECH",
    type: "AI & DATA SCIENCE",
    text:
      "B.Tech in Artificial Intelligence and Data Science, developing a foundation across programming, databases, machine learning, software development, and intelligent systems.",
    tags: ["AI & DS", "SOFTWARE", "DATA"],
  },
];
