import TileBorder from "@/components/TileBorder";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TileBorder />
      <Navbar />
      <Hero />
      <TileBorder />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Resume />
      <Blog />
      <Contact />
      <TileBorder />
      <Footer />
    </>
  );
}
