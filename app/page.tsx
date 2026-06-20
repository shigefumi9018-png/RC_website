import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { Stack } from "@/components/Stack";
import { Team } from "@/components/Team";
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
        <Services />
        <Approach />
        <Stack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
