export type JourneyItem = {
  year: string;
  code: string;
  title: string;
  text: string;
  tags: string[];
};

export const journey: JourneyItem[] = [
  {
    year: "2023",
    code: "TRACE / 001",
    title: "FIRST TRACE",
    text: "Started with curiosity — exploring how software could become more than something functional.",
    tags: ["LEARN", "EXPLORE"],
  },
  {
    year: "2024",
    code: "TRACE / 002",
    title: "BUILDING",
    text: "Moved from following tutorials to creating interfaces, applications, and systems from scratch.",
    tags: ["BUILD", "ITERATE"],
  },
  {
    year: "2025",
    code: "TRACE / 003",
    title: "SYSTEMS",
    text: "Started connecting frontend, backend, data, and artificial intelligence into larger systems.",
    tags: ["CONNECT", "SYSTEM"],
  },
  {
    year: "2026",
    code: "TRACE / 004",
    title: "NOW",
    text: "Exploring the space between intelligent technology, interaction, and human experience.",
    tags: ["QUESTION", "CREATE"],
  },
];
