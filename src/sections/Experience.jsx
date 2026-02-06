import React from 'react';

const frontendSkills = [
  { name: 'Java', level: 'Intermediate' },
  { name: 'HTML', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'Figma', level: 'Intermediate' },
];

const backendSkills = [
  { name: 'Java', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Node JS', level: 'Intermediate' },
  { name: 'Git', level: 'Basic' },
];

const SkillItem = ({ name, level }) => (
  <article>
    <img src="./assets/checkmark.png" alt="Experience icon" className="icon" />
    <div>
      <h3>{name}</h3>
      <p>{level}</p>
    </div>
  </article>
);

const Experience = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-container">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backendSkills.map((skill, index) => (
                <SkillItem key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleScrollToProjects}
      />
    </section>
  );
};

export default Experience;
