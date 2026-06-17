import type { Metadata } from "next";
import Certifications from "@/views/Certifications";

export const metadata: Metadata = {
  title: "Certifications & Badges",
  description:
    "Certifications and skill badges earned by Malik Aliyan Alam, including Google Cloud skill badges in Generative AI, AI Agents, RAG, and Vertex AI.",
};

export default function Page() {
  return <Certifications />;
}
