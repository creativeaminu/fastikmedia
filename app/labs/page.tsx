import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArmCrossLink from "@/components/ArmCrossLink";
import LabsHero from "@/components/labs/LabsHero";
import LabsServices from "@/components/labs/LabsServices";
import LabsProcess from "@/components/labs/LabsProcess";
import LabsStack from "@/components/labs/LabsStack";
import LabsWork from "@/components/labs/LabsWork";
import LabsCTA from "@/components/labs/LabsCTA";

export const metadata: Metadata = {
  title: "Fastik Labs | Automation, AI Agents & Software",
  description:
    "The technology arm of Fastik Media. We build workflow automation, AI agents, software and websites for modern brands.",
  openGraph: {
    title: "Fastik Labs | Automation, AI Agents & Software",
    description:
      "Workflow automation, AI agents, software and web development, built to ship.",
    type: "website",
  },
};

export default function LabsPage() {
  return (
    <>
      <Navbar arm="labs" />
      <main>
        <LabsHero />
        <LabsServices />
        <LabsStack />
        <LabsProcess />
        <LabsWork />
        <LabsCTA />
        <ArmCrossLink to="media" />
      </main>
      <Footer arm="labs" />
    </>
  );
}
