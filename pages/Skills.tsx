
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="section py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-zinc-900 dark:text-white">My Toolkit & Expertise</h1>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          I utilize a range of modern tools and methodologies to create effective solutions for complex challenges. My proficiency is generally Intermediate to Advanced across these skill areas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-16 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map(category => (
            <div key={category.title} className="skill-category">
              <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">{category.title}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill.name} className="skill-tag bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm dark:bg-gray-700 dark:text-gray-200">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto p-8 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Certifications</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>100x Engineers Generative AI Program (Ongoing)</li>
            <li>Introduction to Artificial Intelligence (Infosys Springboard)</li>
            <li>Introduction to Data Science (Infosys Springboard)</li>
            <li>Introduction to Natural Language Processing (Infosys Springboard)</li>
            <li>Introduction to Deep Learning (Infosys Springboard)</li>
            <li>JLPT N5 Certificate (Japanese Language Proficiency)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
