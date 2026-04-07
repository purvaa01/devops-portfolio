import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Index = () => {
  return (
    <div className="bg-[#0a192f] text-gray-200">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;