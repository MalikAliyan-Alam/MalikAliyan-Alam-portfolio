import type { Metadata } from "next";
import WhatIDo from "@/views/WhatIDo";

export const metadata: Metadata = {
  title: "What I Do",
  description:
    "Services by Malik Aliyan Alam: full stack web development, AI automation & agent workflows, chatbots & voicebots, AI evaluation, and RAG systems with Python.",
};

export default function Page() {
  return <WhatIDo />;
}
