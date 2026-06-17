import type { Metadata } from "next";
import Solutions from "@/views/Solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Custom client solutions by Malik Aliyan Alam: websites, AI chatbots & voicebots, n8n automation, and custom AI agents / RAG systems. Get in touch to start.",
};

export default function Page() {
  return <Solutions />;
}
