import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SoftSkills from "@/components/SoftSkills";
import Tech from "@/components/Tech";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <div className="lg:max-w-7xl px-4 mx-auto">
        <Hero />
        <About />
        <SoftSkills />
        <Portfolio />
        <Tech />
      </div>
      <div>
        <Contact/>
      </div>
    </>
  );
}
