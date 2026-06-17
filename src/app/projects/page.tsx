import type { Metadata } from "next";
import Projects from "@/views/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Malik Aliyan Alam: web apps, e-commerce storefronts, landing pages, front-end clones and portfolios, built with HTML, CSS, JavaScript and React.",
};

export default function Page() {
  return <Projects />;
}
