import React from "react";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MotionWrap from "@/components/MotionWrap";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <MotionWrap
      className="w-full border-t border-gray-200 py-12 md:py-24 lg:py-32 dark:border-gray-700"
      id="projects"
    >
      <div className="px-4 md:px-6">
    <div className="flex w-full flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              My
            </h2>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl uppercase">
              Projects
            </h2>
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-400 hidden lg:block lg:mt-0 lg:w-[35%]">
          Here are some of my projects where I&apos;ve turned code into cool, functional stuff.
          </p>
        </div>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProjectCard
              key={index}
              thumbnail="/images/laptop.jpg"
              title={`Project ${index + 1}`}
              description="Category Name" // Replace with your category
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
