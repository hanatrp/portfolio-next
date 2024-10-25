import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col h-[850px] xl:h-full gap-20">
        <Hero />
        <Skills/>
        <Encryption/>
        <Project/>
        <Footer/>
      </div>
    </div>
  );
}
