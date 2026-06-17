import type { Metadata } from "next";
import CaseStudies from "@/views/CaseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected projects by Malik Aliyan Alam across web development, AI chatbots, and n8n automation, with the problem, solution, tools, and outcomes.",
};

export default function Page() {
  return <CaseStudies />;
}
