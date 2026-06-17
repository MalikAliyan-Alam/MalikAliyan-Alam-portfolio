import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Malik Aliyan Alam, AI Automation Engineer & Full-Stack Web Developer in Karachi. MCA student, SMIT learner, with a passion for coding and automation.",
};

export default function Page() {
  return <About />;
}
