import { Metadata } from "next";
import { Suspense } from "react";
import AboutMeSection from "../../components/modules/Home/AboutMeSection";
import BannerSection from "../../components/modules/Home/BannerSection";
import RecentProject from "../../components/modules/Home/RecentProject";
import SkillSection from "../../components/modules/Home/SkillSection";
import ProjectCard from "../../components/modules/Project/ProjectCard";
import ProjectCardSkeleton from "../../components/modules/Project/ProjectCardSkeleton";
import { getAllProjects } from "../../services/projectServices";
import { IProject } from "../../types";

export const metadata: Metadata = {
  title: "Mahabub - Home | FullStack Developer ",
  description:
    "Welcome to Mahabub's portfolio. Explore projects, blogs, and professional profile built with React, Next.js, and JavaScript.",
};

const HomePage = async () => {
  const { data: projectData } = await getAllProjects();
  return (
    <div className="bg-[#020617]">
      <BannerSection />
      <AboutMeSection />
      <SkillSection />
      <RecentProject />
      <Suspense
        fallback={
          <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-0 gap-6 max-w-7xl mx-auto pb-16">
            {Array(2)
              .fill(0)
              .map((_, idx) => (
                <ProjectCardSkeleton key={idx} />
              ))}
          </div>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-6 lg:px-0 gap-6 max-w-7xl mx-auto pb-16">
          {projectData?.slice(0, 2).map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default HomePage;
