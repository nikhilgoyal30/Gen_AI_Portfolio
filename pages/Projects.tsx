
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <section className="section py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-zinc-900 dark:text-white">My Work</h1>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          Here's a selection of projects where I've applied AI and strategic thinking to create innovative solutions and drive results. Click on any project to learn more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
