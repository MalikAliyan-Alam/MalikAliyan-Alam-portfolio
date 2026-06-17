// Badge images are served statically from /public/certifications.
const badge01 = "/certifications/badge01.png";
const badge02 = "/certifications/badge02.png";
const badge03 = "/certifications/badge03.png";
const badge04 = "/certifications/badge04.png";
const badge05 = "/certifications/badge05.png";
const badge06 = "/certifications/badge06.png";
const skillbadge01 = "/certifications/skillbadge01.png";
const skillbadge02 = "/certifications/skillbadge02.png";

export type Badge = {
  image: string;
  title: string;
  issuer: string;
  kind: string;
};

// Captions are written from each badge's content (the source filenames are
// generic, e.g. "badge01.png", so they carry no readable title).
export const BADGES: Badge[] = [
  {
    image: skillbadge02,
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    kind: "Skill Badge · Intermediate",
  },
  {
    image: skillbadge01,
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    kind: "Skill Badge · Introductory",
  },
  {
    image: badge02,
    title: "Enterprise Agents and Use Cases",
    issuer: "Google Cloud",
    kind: "Completion Badge",
  },
  {
    image: badge01,
    title: "Agent Fundamentals",
    issuer: "Google Cloud",
    kind: "Completion Badge",
  },
  {
    image: badge03,
    title: "Introduction to AI Agents",
    issuer: "Google Cloud",
    kind: "Completion Badge",
  },
  {
    image: badge06,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    kind: "Completion Badge",
  },
  {
    image: badge05,
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    kind: "Completion Badge",
  },
  {
    image: badge04,
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    kind: "Completion Badge",
  },
];
