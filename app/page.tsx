import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Meaning } from "@/components/Meaning";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { WhyCollaborate } from "@/components/WhyCollaborate";
import { Approach } from "@/components/Approach";
import { Stack } from "@/components/Stack";
import { Collaboration } from "@/components/Collaboration";
import { Results } from "@/components/Results";
import { Philosophy } from "@/components/Philosophy";
import { Founders } from "@/components/Founders";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Meaning />
        <Skills />
        <Experience />
        <WhyCollaborate />
        <Approach />
        <Stack />
        <Collaboration />
        <Results />
        <Philosophy />
        <Founders />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
