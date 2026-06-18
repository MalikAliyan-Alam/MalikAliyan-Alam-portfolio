import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InitialLoader from "@/components/InitialLoader";
import ThemeProvider from "@/components/ThemeProvider";
import MotionProvider from "@/components/MotionProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Malik Aliyan Alam | AI Automation Engineer & Full-Stack Web Developer",
    template: "%s | Malik Aliyan Alam",
  },
  description:
    "Malik Aliyan Alam, AI Automation Engineer & Full-Stack Web Developer based in Karachi. RAG chatbots, n8n automation, Generative AI apps, and modern web development.",
  icons: {
    icon: "/branding/malik-aliyan-icon-dark.png",
    apple: "/branding/malik-aliyan-icon-dark.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body>
        <ThemeProvider>
          <MotionProvider>
            <CustomCursor />
            <InitialLoader />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <WhatsAppButton />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
