import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[22]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/bangking.png"
          title="Horizon - Banking App"
          description="A banking app for access and manage account and transactions. Built with Next.js, TypeScript, Tailwind CSS, Prisma ORM. "
          link="https://banking-amber.vercel.app/"
        />
        <ProjectCard
          src="/travass.png"
          title="Travass - Company Profile"
          description="A Company Profile website. Built with Next.js, TypeScript, Tailwind CSS. "
          link="https://company-profile-hana.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
