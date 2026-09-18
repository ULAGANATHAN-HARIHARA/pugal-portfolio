export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  year: string;
  status: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  question: string;
  problem: string;
  experiment: string;
  system: string;
  outcome: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "vision-transformer-deepfake-detection",
    number: "01",
    name: "AI-GENERATED MEDIA DETECTION",
    category: "RESEARCH / COMPUTER VISION",
    year: "2026",
    status: "IEEE ICNPCV 2026",
    tagline: "Detecting and classifying AI-generated images and videos.",
    description:
      "A research project on a Vision Transformer–based framework for robust detection and classification of AI-generated images and videos.",
    role: "RESEARCH / DEVELOPMENT",
    stack: ["Python", "PyTorch", "Vision Transformer", "Computer Vision", "Deep Learning"],
    question: "How can visual models distinguish AI-generated media from authentic content?",
    problem:
      "The rapid growth of AI-generated images and videos creates a need for systems that can analyze visual content and identify generated media.",
    experiment:
      "The project explores a Vision Transformer–based approach for learning visual representations relevant to AI-generated media detection and classification.",
    system:
      "The research framework combines image/video preprocessing, deep visual feature learning, and classification into a unified detection pipeline.",
    outcome:
      "The work was accepted for presentation/publication at IEEE ICNPCV 2026.",
    highlights: [
      "Vision Transformer–based framework",
      "AI-generated image and video detection",
      "Computer vision research",
    ],
  },
  {
    slug: "ai-resume-analyzer",
    number: "02",
    name: "AI RESUME ANALYZER",
    category: "AI / NLP",
    year: "2025",
    status: "PROJECT",
    tagline: "Turning a resume document into structured career information.",
    description:
      "An AI-focused resume analysis project using Python and natural language processing to extract and analyze information from resumes.",
    role: "DEVELOPMENT",
    stack: ["Python", "NLP", "PyResparser"],
    question: "How can useful career information be extracted from an unstructured resume?",
    problem:
      "Resume documents contain valuable information in an unstructured format, making manual extraction and analysis repetitive.",
    experiment:
      "The project explores NLP-based parsing to identify structured information from resume documents.",
    system:
      "The system processes resume content and uses PyResparser and NLP techniques to extract relevant fields for further analysis.",
    outcome:
      "A practical AI/NLP project demonstrating document parsing and structured information extraction.",
    highlights: [
      "Resume information extraction",
      "Natural language processing",
      "Python-based document analysis",
    ],
  },
  {
    slug: "virtual-classroom",
    number: "03",
    name: "VIRTUAL CLASSROOM",
    category: "WEB APPLICATION",
    year: "2025",
    status: "PROJECT",
    tagline: "A web application for digital classroom workflows.",
    description:
      "A Virtual Classroom Web App developed using Java, JSP, SQL, and MySQL.",
    role: "DEVELOPMENT",
    stack: ["Java", "JSP", "SQL", "MySQL"],
    question: "How can common classroom workflows be represented through a web application?",
    problem:
      "Traditional classroom activities can involve disconnected information and repetitive administrative workflows.",
    experiment:
      "The project explores a web-based classroom environment using Java and JSP with a relational database backend.",
    system:
      "The application combines Java/JSP application logic with SQL and MySQL for persistent classroom-related data.",
    outcome:
      "A full-stack academic project demonstrating Java web development and relational database integration.",
    highlights: [
      "Java web application",
      "JSP-based interface",
      "SQL and MySQL integration",
    ],
  },
  {
    slug: "teampulse",
    number: "04",
    name: "TEAMPULSE",
    category: "PRODUCTIVITY / FULL STACK",
    year: "2026",
    status: "BUILD",
    tagline: "A task management and productivity workspace.",
    description:
      "A full-stack task management and productivity tool built with React, Node.js, Express, and MongoDB Atlas.",
    role: "FULL-STACK DEVELOPMENT",
    stack: ["React", "Node.js", "Express", "MongoDB Atlas"],
    question: "How can task information stay organized while keeping the interface simple?",
    problem:
      "Task management can become fragmented when work, status, and context are spread across disconnected views.",
    experiment:
      "The project explores a focused productivity interface backed by a full-stack JavaScript architecture.",
    system:
      "The application separates the React client from a Node.js/Express server and uses MongoDB Atlas for application data.",
    outcome:
      "A practical full-stack project demonstrating frontend, backend, API, and database integration.",
    highlights: [
      "React task-management interface",
      "Node.js and Express backend",
      "MongoDB Atlas integration",
    ],
  },
];
