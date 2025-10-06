import React from "react";
import IntroCard from "../components/introCard";
import Skills from "../components/skills";
import ProjectsPreview from "../components/projectsPreview";

export default function Page() {
  return (
    <main className="px-4 py-8 max-w-5xl mx-auto">
      <IntroCard />
      <Skills />
      <ProjectsPreview />
    </main>
  );
}

