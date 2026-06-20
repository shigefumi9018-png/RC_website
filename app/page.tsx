import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Approach } from "@/components/Approach";
import { Stack } from "@/components/Stack";
import { Collaboration } from "@/components/Collaboration";
import { Founders } from "@/components/Founders";
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
        <Skills />
        <Experience />
        <Approach />
        <Stack />
        <Collaboration />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
