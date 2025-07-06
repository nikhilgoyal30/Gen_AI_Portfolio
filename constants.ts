
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'project1',
    title: 'Advanced Room Transformation System',
    subtitle: 'A 100x Engineers Program Initiative',
    shortDescription: 'AI-powered system for visualizing realistic interior design changes.',
    imageUrl: 'https://i.postimg.cc/T1qp4ZBG/contemporary.png',
    challenge: 'Interior designers and homeowners often struggle to visualize how a space would look with different design aesthetics. Traditional methods like manual photoshopping are time-consuming and often fail to deliver realistic results. The challenge was to create a system that could transform room images while maintaining architectural integrity and spatial dimensions.',
    solution: 'I engineered a multi-step AI system using ComfyUI that combines MLSD edge detection with ControlNet to preserve structural elements while applying new design styles. The integration of IP Adapter technology allows for style-specific transformations that maintain spatial coherence and lighting conditions, resulting in highly realistic room redesigns.',
    technologies: ['ComfyUI', 'MLSD Preprocessor', 'ControlNet', 'IP Adapter', 'Generative AI'],
    outcomes: 'The system successfully produces high-fidelity transformations that maintain structural integrity while applying completely new aesthetic styles. Interior designers can now rapidly visualize multiple design directions for clients, and homeowners can explore various design options before committing to expensive renovations.',
    gallery: [
      { type: 'image', url: 'https://i.postimg.cc/T1qp4ZBG/contemporary.png', thumbnailUrl: 'https://i.postimg.cc/T1qp4ZBG/contemporary.png'},
      { type: 'image', url: 'https://i.postimg.cc/pLdpscCb/indian.png', thumbnailUrl: 'https://i.postimg.cc/pLdpscCb/indian.png'},
      { type: 'image', url: 'https://i.postimg.cc/MK5nbJym/japandi.png', thumbnailUrl: 'https://i.postimg.cc/MK5nbJym/japandi.png'},
      { type: 'image', url: 'https://i.postimg.cc/PfmpJwJc/mimimalist.png', thumbnailUrl: 'https://i.postimg.cc/PfmpJwJc/mimimalist.png'}
    ]
  },
  {
    id: 'project2',
    title: 'Dual Character Fusion Portrait Generator',
    subtitle: 'A 100x Engineers Program Initiative',
    shortDescription: 'AI system that merges characteristics from two different individuals.',
    imageUrl: 'https://i.postimg.cc/c4qT3wsN/Comfy-UI-temp-exska-00013.png',
    challenge: 'Creating believable portraits that merge characteristics of two different people is extremely difficult with traditional methods. The challenge was to develop an AI system that could effectively combine distinct facial features, expressions, and stylistic elements while maintaining photorealistic quality and avoiding common issues like uncanny valley effects.',
    solution: 'I developed custom LoRA models trained on specific character attributes and engineered a precise parameter-balancing system in ComfyUI and Flux. By carefully weighting the influence of each character\'s features and implementing advanced sampling techniques, I created a workflow that produces natural-looking fusion portraits that honor the essence of both source individuals.',
    technologies: ['ComfyUI', 'Flux', 'LoRA Training', 'Generative AI', 'Image Synthesis'],
    outcomes: 'The system consistently produces realistic merged portraits with significantly reduced artifacts compared to conventional approaches. The results show natural facial harmony while preserving distinctive characteristics from both source individuals. This technology has applications in entertainment, character design, and creative content generation.',
    gallery: [
      { type: 'image', url: 'https://i.postimg.cc/c4qT3wsN/Comfy-UI-temp-exska-00013.png', thumbnailUrl: 'https://i.postimg.cc/c4qT3wsN/Comfy-UI-temp-exska-00013.png' },
      { type: 'image', url: 'https://i.postimg.cc/xdF31bsh/Whats-App-Image-2025-04-20-at-7-34-24-AM.jpg', thumbnailUrl: 'https://i.postimg.cc/xdF31bsh/Whats-App-Image-2025-04-20-at-7-34-24-AM.jpg' },
      { type: 'image', url: 'https://i.postimg.cc/zBswnYYk/Comfy-UI-temp-kpppn-00036.png', thumbnailUrl: 'https://i.postimg.cc/zBswnYYk/Comfy-UI-temp-kpppn-00036.png' }
    ]
  },
  {
    id: 'project3',
    title: 'AI-Powered Instagram Strategy',
    subtitle: 'Freelance Client Work (Fashion, Travel, Wellness Brands)',
    shortDescription: 'Comprehensive AI-driven approach to Instagram growth and engagement.',
    imageUrl: 'https://i.postimg.cc/SsSR3Z7p/IMG-5638.jpg',
    challenge: 'My clients in fashion, travel, and wellness sectors needed to stand out in increasingly crowded Instagram feeds. They faced common challenges: inconsistent posting, generic content, time constraints, and difficulty maintaining authentic engagement. They needed a comprehensive strategy that would drive real growth without requiring constant attention.',
    solution: 'Strategic Foundation: Developed data-driven content calendars based on audience insights and platform analytics\nAI-Powered Content Creation: Utilized generative AI tools to craft engaging captions, develop content themes, and generate content variations\nVideo Enhancement: Implemented AI video editing techniques to optimize engagement and retention\nAutomated Community Management: Created smart response systems for authentic comment engagement and follower interaction\nBrand Identity Reinforcement: Maintained consistent visual language and brand voice across all content\nDistinctive Brand Voice: Developed unique tone and personality for each client\'s content\nPrecision Audience Targeting: Utilized data analysis to identify and engage ideal audience segments',
    technologies: ['Instagram Strategy', 'AI Content Creation', 'Video Editing', 'Community Automation', 'Brand Voice Development'],
    outcomes: '50% increase in engagement rates across client accounts\n30% reduction in content development time\n45% improvement in video view duration\n80% faster response time to follower interactions\n35% increase in content shareability',
    gallery: [
      { type: 'video', url: 'https://drive.google.com/file/d/1soIr6mCmdJvRR9KPtUQ9mtHZ3d-cLjIK/view?usp=drivesdk', thumbnailUrl: 'https://i.postimg.cc/SsSR3Z7p/IMG-5638.jpg' },
      { type: 'video', url: 'https://drive.google.com/file/d/18p1iyvtL003Xr6svwKheskHsO0VLd1eO/view?usp=drivesdk', thumbnailUrl: 'https://i.postimg.cc/hPzjkQxh/Whats-App-Image-2025-05-08-at-12-48-01-AM.jpg' },
      { type: 'video', url: 'https://drive.google.com/file/d/1mAbP_h7dFJR8nxIn1IGywRp4Xp78Pcpu/view?usp=drivesdk', thumbnailUrl: 'https://i.postimg.cc/7ZSL6vKk/Whats-App-Image-2025-05-08-at-12-48-01-AM-1.jpg' },
      { type: 'video', url: 'https://drive.google.com/file/d/17NQ_cmbjhjfAz63iAYxi51bsurLUTAwA/view?usp=drivesdk', thumbnailUrl: 'https://i.postimg.cc/xj7j3j7Q/Whats-App-Image-2025-05-08-at-12-48-02-AM.jpg' },
      { type: 'video', url: 'https://drive.google.com/file/d/1clJ-CBC2ZrrIh3NwaOYdD1891t6eXPFE/view?usp=drivesdk', thumbnailUrl: 'https://i.postimg.cc/J4kr6VVk/Whats-App-Image-2025-05-08-at-12-48-02-AM-1.jpg' },
    ]
  },
  {
    id: 'project4',
    title: 'AI-Driven Cinematic Storytelling',
    subtitle: 'R&D / Personal Showcase',
    shortDescription: 'An end-to-end AI filmmaking pipeline to create cinematic shorts with consistent characters and environments.',
    imageUrl: 'https://i.postimg.cc/xTQxN2ps/Chat-GPT-Image-Jul-5-2025-01-52-33-AM.png',
    challenge: "Traditional filmmaking is constrained by complex logistics, high costs, and the immense difficulty of maintaining visual consistency (of characters, environments, and lighting) across scenes. Furthermore, crafting compelling narratives and translating them into effective, scene-by-scene prompts for AI requires a blend of creative and technical expertise.",
    solution: "I developed a comprehensive AI-powered filmmaking pipeline to address these challenges head-on. This workflow utilizes Flux Kontext for robust character and environmental consistency, ensuring a coherent visual language. Gemini was leveraged for dynamic storyboarding and narrative development, while ChatGPT was used to craft precise, highly-descriptive prompts. The final output was enriched with realistic voiceovers from ElevenLabs, custom background music from Suno AI, and immersive sound effects from Freesound.org.",
    technologies: ['Flux Kontext', 'Gemini', 'ChatGPT', 'ElevenLabs', 'Suno AI', 'Freesound.org', 'AI Storyboarding', 'Prompt Engineering', 'Sound Design'],
    outcomes: "This end-to-end AI workflow democratizes filmmaking, enabling the creation of high-quality cinematic shorts without the need for physical sets, actors, or large production crews. It drastically reduces production time from weeks to mere days and allows for rapid, cost-effective iteration on creative concepts, transforming storytelling possibilities.",
    gallery: [
        { type: 'video', url: 'https://drive.google.com/file/d/124La-5DtgqkAv_RihgzGUJhtcMPRBMYs/view?usp=sharing', thumbnailUrl: 'https://i.postimg.cc/855DSvM6/IMG-6834.png' }
    ]
  },
  {
    id: 'project5',
    title: 'Rapid-Scale AI Commercial Production',
    subtitle: 'Conceptual / Commercial Application',
    shortDescription: 'An AI-powered system to generate production-ready commercial ads, reducing costs by 90% and time by 95%.',
    imageUrl: 'https://i.postimg.cc/T1F3S1D6/image-74.png',
    challenge: "Conventional ad production is notoriously expensive and time-consuming, involving large teams, location scouting, and lengthy post-production cycles. This legacy model hinders a brand's ability to scale campaigns quickly, A/B test multiple creative variations, or react swiftly to market trends.",
    solution: "Leveraged a suite of advanced generative AI video tools to create production-ready commercial advertisements from simple text prompts or product images. This approach bypasses traditional production bottlenecks entirely, enabling the rapid generation of diverse, high-quality ad concepts and variations tailored to different market segments and platforms.",
    technologies: ['Generative Video AI', 'AI Scripting', 'AI Voiceover', 'Rapid Prototyping'],
    outcomes: "Achieved a projected 90% reduction in production costs and a 95% reduction in turnaround time compared to traditional methods. This empowers brands to scale their video advertising efforts exponentially, testing dozens of creative assets in the time it would previously take to produce a single conventional ad, leading to more effective and data-driven campaigns.",
    gallery: [
        { type: 'video', url: 'https://drive.google.com/file/d/1SmBB1b9sZbryMvpCmS3KRF_0ceGnwYCC/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/Y0LH4wX2/image-2.jpg' },
        { type: 'video', url: 'https://drive.google.com/file/d/12DZ3_xTUgW6SLktzIrghicMm5pU8JNdX/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/kDrdKhZQ/Image-fx-15.png' },
        { type: 'video', url: 'https://drive.google.com/file/d/13oHlCihx0b7OrH1BwKUr7w_K96FqcMrD/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/XNtZsN68/image-63.png' }
    ]
  },
  {
    id: 'project6',
    title: 'Generative AI Product Visualization',
    subtitle: 'R&D / E-commerce Solution',
    shortDescription: 'A custom workflow to place product images into infinite AI-generated scenes, eliminating physical photoshoots.',
    imageUrl: 'https://i.postimg.cc/2jFTDWcy/Comfy-UI-temp-ptcik-00001.png',
    challenge: "High-quality product photography and videography require expensive photoshoots, physical product samples for every shot, and elaborate sets. Creating a wide variety of lifestyle or marketing imagery for a single product across multiple campaigns is often cost-prohibitive and logistically complex.",
    solution: "I built a custom workflow within ComfyUI that leverages fine-tuned open-source models like Stable Diffusion, combined with ControlNet and LoRA for precise control. This system can take a simple, isolated product image and seamlessly place it into an infinite variety of AI-generated scenes, styles, and contexts with photorealistic quality and accurate lighting.",
    technologies: ['ComfyUI', 'Stable Diffusion', 'ControlNet', 'LoRA', 'Photorealistic Rendering', 'AI-Generated Environments'],
    outcomes: "This solution empowers businesses to generate an entire catalog of unique, high-fidelity product images and short promotional videos for e-commerce and marketing without a single physical photoshoot. This drastically reduces marketing asset creation costs, eliminates the need for shipping prototypes, and shortens time-to-market significantly.",
    gallery: [
        { type: 'video', url: 'https://drive.google.com/file/d/17_Xz3ZpPKtnnw1NTSnV8KBKg5yhseBn2/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/HLWjrVbp/Screenshot-2025-07-05-041624.png' },
        { type: 'video', url: 'https://drive.google.com/file/d/1Kk1K3dE9eQhUR_ZAUl3PJvNSadU4aP05/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/cHrHc2D2/Screenshot-2025-07-05-041721.png' },
        { type: 'image', url: 'https://i.postimg.cc/2jFTDWcy/Comfy-UI-temp-ptcik-00001.png', thumbnailUrl: 'https://i.postimg.cc/2jFTDWcy/Comfy-UI-temp-ptcik-00001.png' }
    ]
  },
  {
    id: 'project7',
    title: 'Realistic Digital Avatar Creation & Cloning',
    subtitle: 'R&D / Personalization Technology',
    shortDescription: 'A process to create photorealistic digital clones for scalable, personalized video content creation on demand.',
    imageUrl: 'https://i.postimg.cc/QChQCXN1/Whisk-d229b36b1f.jpg',
    challenge: "Creating scalable and personalized video content—for corporate training, sales outreach, or social media—often requires significant time from key personnel or the high cost of hiring actors. Producing consistent content over time is difficult due to scheduling conflicts and maintaining a uniform appearance.",
    solution: "I engineered a process to create a photorealistic digital clone of a human subject using a combination of advanced generative AI techniques. This high-fidelity digital avatar can be animated and tasked to deliver any script using a synthetically cloned voice, enabling the fully automated generation of new, personalized video content on demand.",
    technologies: ['AI Avatar Generation', 'Voice Cloning', 'Video Synthesis', 'Personalized Content Automation'],
    outcomes: "Provides a revolutionary, scalable solution for creating consistent, high-quality video content. This eliminates scheduling dependencies and allows for the creation of unlimited video assets from a single, one-time avatar creation process, ensuring perfect brand and character consistency for any communication need.",
    gallery: [
      { type: 'video', url: 'https://drive.google.com/file/d/1L5zS4qeED_6LyUi3eqAE0UTEffY4tQWQ/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/SR9xB8bG/Screenshot-2025-07-05-041945.png' },
      { type: 'video', url: 'https://drive.google.com/file/d/13O0UgUZvEr3uCYiF_JXcBHmBwlwJH5at/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/44HyHCHh/Screenshot-2025-07-05-042025.png' },
      { type: 'video', url: 'https://drive.google.com/file/d/1X_Ae-RiK65ChcWnWwpp_O8miD7HIC3r5/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/SNWKVWrS/Screenshot-2025-07-05-042105.png' },
      { type: 'video', url: 'https://drive.google.com/file/d/107VRJ3wXWasvEGSOnYbF12YRpQYuzt_7/view?usp=drive_link', thumbnailUrl: 'https://i.postimg.cc/yYqdFf0p/Screenshot-2025-07-05-042149.png' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Generative AI & Machine Learning',
    skills: [
      { name: 'Claude' }, { name: 'ChatGPT' }, { name: 'Deepseek' }, { name: 'Flux' }, { name: 'ComfyUI' },
      { name: 'LoRA' }, { name: 'IP-Adapter' }, { name: 'ControlNet' }, { name: 'Stable Diffusion' }
    ]
  },
  {
    title: 'No-Code & Automation',
    skills: [{ name: 'Retool' }, { name: 'n8n' }]
  },
  {
    title: 'Design & Video Editing',
    skills: [{ name: 'Canva' }, { name: 'CapCut' }]
  },
  {
    title: 'Programming & Data',
    skills: [{ name: 'Python' }, { name: 'C' }, { name: 'SQL' }]
  },
  {
    title: 'Social Media Marketing',
    skills: [
      { name: 'Instagram Strategy' }, { name: 'Content Creation' }, { name: 'Engagement Tactics' },
      { name: 'Analytics' }, { name: 'Growth Hacking' }, { name: 'Influencer Collaboration' }
    ]
  },
  {
    title: 'Languages',
    skills: [{ name: 'English (Native)' }, { name: 'Japanese (JLPT N5)' }]
  }
];
