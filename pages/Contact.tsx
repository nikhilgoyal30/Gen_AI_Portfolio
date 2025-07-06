
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // In a real app, this would send the form data to a backend.
    // For this example, we'll just log it to the console.
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Check console for data)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-zinc-900 dark:text-white">Let's Connect</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
          I'm currently available for new freelance opportunities and collaborations in generative AI, content creation, and social media strategy. Open to remote collaborations with forward-thinking brands and individuals.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          <div className="text-center">
            <i className="ri-mail-line text-4xl mb-4 text-accent-purple"></i>
            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Email</h3>
            <a href="mailto:ai.nikhilgoyal@gmail.com" className="text-black dark:text-gray-300 hover:underline">ai.nikhilgoyal@gmail.com</a>
          </div>
          <div className="text-center">
            <i className="ri-linkedin-box-line text-4xl mb-4 text-accent-purple"></i>
            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/nikhil-goyal-07a7471a2/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-gray-300 hover:underline">Nikhil Goyal</a>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-purple bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-purple bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-purple bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-purple bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"></textarea>
            </div>
            <button type="button" onClick={handleSubmit} className="btn w-full bg-accent-purple text-white py-3 px-6 rounded font-semibold hover:bg-purple-500 transition-all duration-300 transform hover:scale-105">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
