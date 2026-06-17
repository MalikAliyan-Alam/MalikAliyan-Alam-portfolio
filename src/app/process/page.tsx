import type { Metadata } from "next";
import Process from "@/views/Process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How working with Malik Aliyan Alam works, from initial consultation to launch and post-launch automation maintenance, plus answers to common client questions.",
};

export default function Page() {
  return <Process />;
}
