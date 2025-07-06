
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-zinc-900 dark:text-white">About Me</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <img src="https://i.postimg.cc/JnQ8VM7T/Comfy-UI-00503.png" alt="Nikhil Goyal" className="w-64 h-64 md:w-full md:max-w-sm mx-auto rounded-full object-cover shadow-xl" />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">My Journey</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I began my journey at the intersection of technology and creativity, focusing on how emerging AI tools can transform digital content creation and marketing strategies. As a B.Tech student in AI & Computer Science, I combine academic knowledge with practical application through the 100x Engineers Generative AI Program.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Philosophy & Approach</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              My approach centers on finding the perfect balance between technical innovation and creative expression. I believe that AI should enhance human creativity, not replace it. Every project I undertake aims to solve real problems while delivering tangible results through thoughtful implementation of cutting-edge technologies.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Beyond Tech</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              When I'm not exploring the latest in AI technologies, I'm passionate about dance and have even launched a wedding choreography startup. I'm also currently studying Japanese and have achieved JLPT N5 level certification, reflecting my interest in global cultures and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
