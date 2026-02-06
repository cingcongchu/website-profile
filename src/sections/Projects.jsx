import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Sleep Tracker',
    image: './assets/SleepTracker.png',
    githubLink: 'https://github.com/farrelantonius/SleepTracking/tree/main',
  },
  {
    id: 2,
    title: 'ERP Mampir Jaya',
    images: [
      './assets/ERP1.png',
      './assets/ERP2.png',
      './assets/ERP3.png',
      './assets/ERP4.png'
    ],
    githubLink: 'https://github.com/cingcongchu/ERP-Mampir-Jaya',
  },
  {
    id: 3,
    title: 'Perfumes Scraping',
    image: './assets/project-3.png',
    githubLink: 'https://github.com/cingcongchu/perfume-scraper',
  },
];

const ProjectCard = ({ title, image, images, githubLink, demoLink }) => (
  <div className="details-container color-container">
    <div className="article-container">
      {images ? (
        <div className="project-images-grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`${title} ${index + 1}`} className="project-img" />
          ))}
        </div>
      ) : (
        <img src={image} alt={title} className="project-img" />
      )}
    </div>
    <h2 className="experience-sub-title project-title">{title}</h2>
    <div className="btn-container">
      <button
        className="btn btn-color-2 project-btn"
        onClick={() => window.open(githubLink, '_blank')}
      >
        Github
      </button>
      {demoLink && (
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.open(demoLink, '_blank')}
        >
          Live Demo
        </button>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-container">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              images={project.images}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
