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
  system: string[];
  outcome: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "spectra",
    number: "01",
    name: "SPECTRA",
    category: "AI / COMPUTER VISION",
    year: "2026",
    status: "PROTOTYPE",
    tagline: "Making visual information searchable.",
    description:
      "A computer-vision system exploring how continuous visual information can become meaningful, searchable events.",
    role: "AI / SYSTEM DESIGN / INTERACTION",
    stack: ["Python", "PyTorch", "FastAPI", "React", "PostgreSQL", "Docker"],
    question:
      "What if machines could remember what they see instead of simply recording it?",
    problem:
      "Continuous visual data grows faster than people can meaningfully review. Traditional video archives store information, but rarely help people understand what actually happened.",
    experiment:
      "SPECTRA explores a pipeline that converts raw visual streams into semantic events. Instead of searching through hours of footage, the user interacts with meaningful moments extracted from the stream.",
    system: [
      "CAMERA",
      "VISION MODEL",
      "EVENT EXTRACTION",
      "SEMANTIC INDEX",
      "SEARCH / VISUALIZATION",
    ],
    outcome:
      "A prototype exploring how computer vision can become a layer of memory rather than simply a recording mechanism.",
    highlights: [
      "Computer vision pipeline",
      "Semantic event extraction",
      "Searchable visual memory",
    ],
  },
  {
    slug: "kite",
    number: "02",
    name: "KITE",
    category: "PRODUCT / INTERACTION",
    year: "2026",
    status: "RELEASED",
    tagline: "Turning scattered work into one connected workspace.",
    description:
      "A workspace concept connecting tasks, documents, conversations, and decisions into one navigable system.",
    role: "PRODUCT / UX / FRONTEND",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    question:
      "What happens when everything around a task becomes part of the same context?",
    problem:
      "Modern work is fragmented across messages, documents, task managers, and meetings, making important context difficult to recover.",
    experiment:
      "KITE explores a workspace where related information stays connected instead of being separated into independent tools.",
    system: [
      "TASKS",
      "DOCUMENTS",
      "CONVERSATIONS",
      "CONTEXT",
      "DECISIONS",
    ],
    outcome:
      "A product exploration focused on reducing context switching through connected information.",
    highlights: [
      "Connected workspace model",
      "Context-first interaction",
      "Product interface design",
    ],
  },
  {
    slug: "mesh",
    number: "03",
    name: "MESH",
    category: "DATA / VISUALIZATION",
    year: "2026",
    status: "EXPERIMENT",
    tagline: "Exploring relationships hidden inside data.",
    description:
      "An experimental data environment where information is represented through relationships, movement, and spatial structure.",
    role: "CREATIVE DEVELOPMENT / DATA VISUALIZATION",
    stack: ["TypeScript", "React", "D3", "Canvas"],
    question:
      "Can data interfaces show relationships instead of only numbers?",
    problem:
      "Traditional dashboards are effective at presenting individual metrics, but relationships between those metrics can disappear behind grids and isolated charts.",
    experiment:
      "MESH represents information as a connected system. Users move through relationships rather than reading a predefined dashboard hierarchy.",
    system: [
      "DATA",
      "RELATIONSHIPS",
      "GRAPH",
      "INTERACTION",
      "INSIGHT",
    ],
    outcome:
      "An experimental interface for exploring information through connections, movement, and spatial relationships.",
    highlights: [
      "Relationship-based visualization",
      "Interactive graph exploration",
      "Canvas-driven interface",
    ],
  },
  {
    slug: "echo",
    number: "04",
    name: "ECHO",
    category: "AI / CREATIVE TECHNOLOGY",
    year: "2026",
    status: "RESEARCH",
    tagline: "An interface that remembers interaction.",
    description:
      "An experimental AI interface exploring how interaction history can become part of a digital environment.",
    role: "AI / INTERACTION / SYSTEMS",
    stack: ["Next.js", "TypeScript", "Python", "LLM", "PostgreSQL"],
    question:
      "What would an interface feel like if it could remember how you work?",
    problem:
      "Many digital tools treat every interaction as isolated, forcing people to repeatedly reconstruct their context.",
    experiment:
      "ECHO explores a contextual interface where previous interactions influence how information is organized and presented.",
    system: [
      "INTERACTION",
      "CONTEXT",
      "MEMORY",
      "ADAPTATION",
      "ACTION",
    ],
    outcome:
      "A research concept investigating contextual interfaces and interaction memory.",
    highlights: [
      "Context-aware interaction",
      "AI-assisted interface concept",
      "Interaction memory research",
    ],
  },
];
