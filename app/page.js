import About from "@/components/About";
import Contact from "@/components/Contact";
import { Educations } from "@/components/Educations";
import Hero from "@/components/Hero";
import Footer from "@/components/Nav/Footer";
import NavBar from "@/components/Nav/NavBar";
import { Research } from "@/components/Research";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main >
      <NavBar />
      <Hero />
      <About />
      <Educations />
      <Research />
      <Services />
      <Contact />
      <Footer />
    </main>

  );
}
