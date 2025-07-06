
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative -mt-16 md:-mt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-purple via-deep-navy to-black opacity-40 dark:opacity-100 z-[-1]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">NIKHIL GOYAL</h1>
          <h2 className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8">Creative Technologist | Generative AI Specialist | Social Media Strategist</h2>
          <p className="max-w-3xl mx-auto mb-10 text-gray-200 dark:text-gray-300">
            I leverage cutting-edge AI to craft compelling digital experiences and drive measurable growth in social media marketing. My expertise lies in transforming creative ideas into impactful content and automated solutions.
          </p>
          <button className="btn bg-accent-purple text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-500 transition-all duration-300 transform hover:scale-105" onClick={() => navigate('/projects')}>
            Explore My Work
          </button>
        </div>
      </section>
      
      <div className="container mx-auto px-4">
        {/* About Me Snippet */}
        <section className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-zinc-900 dark:text-white">A Bit About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
            <div className="md:w-1/3 flex justify-center">
              <img src="https://i.postimg.cc/JnQ8VM7T/Comfy-UI-00503.png" alt="Nikhil Goyal" className="w-56 h-56 mx-auto rounded-full object-cover shadow-lg" />
            </div>
            <div className="md:w-2/3">
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Driven by a passion for innovation at the intersection of AI and creativity. Currently pursuing a B.Tech in AI & Computer Science and active in the 100x Engineers Generative AI Program, I bring a blend of technical knowledge and practical marketing experience.
              </p>
              <button className="btn border border-zinc-900 dark:border-gray-500 text-zinc-900 dark:text-gray-300 py-3 px-6 rounded font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors" onClick={() => navigate('/about')}>Learn More About Me</button>
            </div>
          </div>
        </section>

        {/* My Projects */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-zinc-900 dark:text-white">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Core Skills */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-zinc-900 dark:text-white">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
              <i className="ri-ai-generate text-4xl mb-4 text-accent-purple"></i>
              <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">Generative AI & Content Creation</h3>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
              <i className="ri-instagram-line text-4xl mb-4 text-accent-purple"></i>
              <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">AI-Driven Social Media Strategy</h3>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
              <i className="ri-code-box-line text-4xl mb-4 text-accent-purple"></i>
              <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">No-Code Automation</h3>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
              <i className="ri-bar-chart-grouped-line text-4xl mb-4 text-accent-purple"></i>
              <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">Instagram Growth</h3>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button className="btn border border-zinc-900 dark:border-gray-500 text-zinc-900 dark:text-gray-300 py-3 px-6 rounded font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors" onClick={() => navigate('/skills')}>View All Skills</button>
          </div>
        </section>

        {/* Get In Touch */}
        <section className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-zinc-900 dark:text-white">Let's Connect</h2>
          <p className="text-center max-w-2xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
            Open to new opportunities and collaborations. Let's discuss how I can help you achieve your goals.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:ai.nikhilgoyal@gmail.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white">
              <i className="ri-mail-line mr-2"></i> ai.nikhilgoyal@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/nikhil-goyal-07a7471a2/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white">
              <i className="ri-linkedin-box-line mr-2"></i> LinkedIn Profile
            </a>
          </div>
          <div className="mt-8 text-center">
            <button className="btn border border-zinc-900 dark:border-gray-500 text-zinc-900 dark:text-gray-300 py-3 px-6 rounded font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-colors" onClick={() => navigate('/contact')}>More Contact Options</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
