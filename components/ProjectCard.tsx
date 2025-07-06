
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-accent-purple/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <img src={project.imageUrl} alt={project.title} className="project-image w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">{project.shortDescription}</p>
        <Link to={`/projects/${project.id}`} className="text-accent-purple font-medium flex items-center hover:text-purple-700 dark:hover:text-purple-300">
          View Project Details <i className="ri-arrow-right-line ml-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
