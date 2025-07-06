
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  openLightbox: (src: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ openLightbox }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  const currentIndex = PROJECTS.findIndex(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto text-center py-20 px-4">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Project Not Found</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">The project you are looking for does not exist.</p>
        <Link to="/projects" className="mt-8 inline-block bg-accent-purple text-white py-2 px-4 rounded">
          Back to Projects
        </Link>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  const navigationBar = (
    <div className="flex justify-between items-center py-8">
      <div>
        {prevProject ? (
          <Link to={`/projects/${prevProject.id}`} className="font-medium flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            <i className="ri-arrow-left-line mr-1"></i> Previous
          </Link>
        ) : (
          <span className="font-medium flex items-center text-gray-400 dark:text-gray-600 cursor-not-allowed">
            <i className="ri-arrow-left-line mr-1"></i> Previous
          </span>
        )}
      </div>
      <button className="btn border border-zinc-900 dark:border-gray-500 text-zinc-900 dark:text-gray-300 py-2 px-4 rounded font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors" onClick={() => navigate('/projects')}>Back to Projects</button>
      <div>
        {nextProject ? (
          <Link to={`/projects/${nextProject.id}`} className="font-medium flex items-center text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
            Next <i className="ri-arrow-right-line ml-1"></i>
          </Link>
        ) : (
          <span className="font-medium flex items-center text-gray-400 dark:text-gray-600 cursor-not-allowed">
            Next <i className="ri-arrow-right-line ml-1"></i>
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section className="section pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="border-b border-gray-200 dark:border-gray-800 mb-8">
          {navigationBar}
        </div>

        <h1 className="text-4xl font-bold mb-2 text-center text-zinc-900 dark:text-white">{project.title}</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">{project.subtitle}</p>

        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {project.galleryImages.map((imgSrc, index) => (
              <div key={index} className="gallery-item cursor-pointer group overflow-hidden rounded-lg" onClick={() => openLightbox(imgSrc)}>
                <img src={imgSrc} alt={`${project.title} - view ${index + 1}`} className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105" />
              </div>
            ))}
          </div>
        )}
        
        {project.videoLinks && project.videoLinks.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-6 text-center text-zinc-900 dark:text-white">Content Samples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {project.videoLinks.map((video, index) => (
                <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="gallery-item group block rounded-lg overflow-hidden shadow-md">
                  <div className="relative">
                    <img src={video.thumbnailUrl} alt={`Content Sample ${index + 1}`} className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-play-circle-line text-white text-6xl"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">The Challenge</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.challenge}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">My Solution</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.solution}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Technologies & Methods</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span key={tech} className="skill-tag bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm dark:bg-gray-700 dark:text-gray-200">{tech}</span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Outcomes & Impact</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{project.outcomes}</p>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800">
          {navigationBar}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
