"use client";
import { useState } from "react";
import ProjectCard from "../_components/ProjectCard";

const projects = [
  {
    title: "NINFA",
    className: "translate-x-0 rotate-[1deg]",
  },
  {
    title: "Muhju",
    className: "sm:translate-x-[50px] rotate-[-1deg]",
  },
  {
    title: "The Midst of Reality and Imagination",
    className: "sm:translate-x-0 rotate-[1deg]",
  },
  {
    title: "- - - - - -",
    className: "sm:translate-x-[50px] rotate-[-1deg]",
  },
  {
    title: "- - - - - -",
    className: "sm:translate-x-0 rotate-[1deg]",
  },
  {
    title: "- - - - - -",
    className: "sm:translate-x-[50px] rotate-[-1deg]",
  },
  {
    title: "- - - - - -",
    className: "sm:translate-x-0 rotate-[1deg]",
  },
  {
    title: "- - - - - -",
    className: "sm:translate-x-[50px] rotate-[-1deg]",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<number>(-1);

  return (
    <div className="flex h-screen w-screen flex-col justify-between  overflow-hidden bg-[#FF0505] bg-center p-24">
      <div className="relative flex w-full flex-col justify-end md:w-2/3 lg:w-1/3">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`${project.className} cursor-pointer duration-100 hover:scale-110`}
          >
            <ProjectCard
              title={project.title}
              handleSelect={() => setSelected((p) => (p === i ? -1 : i))}
              selected={selected === i}
            />
          </div>
        ))}
      </div>
      <div className="flex -rotate-[6deg] justify-end">
        <p className="w-fit  font-sans text-[6rem] leading-none text-white sm:text-[10rem] lg:text-[14rem]">
          ProJeCts
        </p>
      </div>
    </div>
  );
};

export default Projects;
