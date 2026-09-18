export type Thought = {
  number: string;
  title: string;
  thesis: string;
  body: string;
  signal: string;
};

export const thoughts: Thought[] = [
  {
    number: "01",
    title: "THE INTERFACE IS NOT THE PRODUCT",
    thesis: "A good interface should make the underlying system easier to understand, not become the thing people have to fight.",
    body: "The visual layer is only the surface. The interesting work happens underneath — in the relationships, decisions, feedback loops, and information architecture that make an experience coherent.",
    signal: "INTERACTION",
  },
  {
    number: "02",
    title: "DESIGNING FOR UNCERTAINTY",
    thesis: "Intelligent systems rarely know everything. Interfaces should make uncertainty visible instead of pretending it does not exist.",
    body: "AI introduces probabilities, ambiguity, and incomplete information. Good interaction design can communicate those states clearly while still helping people move forward.",
    signal: "INTELLIGENCE",
  },
  {
    number: "03",
    title: "MAKING INVISIBLE SYSTEMS VISIBLE",
    thesis: "The most interesting technology often disappears behind the interface. Design can reveal what is happening without adding unnecessary complexity.",
    body: "Data flows, models, connections, and system states can become part of the experience. When people understand the structure behind a tool, they can interact with it more intentionally.",
    signal: "SYSTEMS",
  },
];
