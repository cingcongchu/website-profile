import React from 'react';

const About = () => {
  const handleScrollToExperience = () => {
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
        </div>
        <div className="about-details-container">
          <div className="about-container">
            <div className="details-container">
              <img src="./assets/experience.png" alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                1 Year internship <br /> PT Agiva Indonesia | Bintaro, Indonesia
                February 2024 – February 2025 <br /> Mobile Application Developer
              </p>
            </div>
            <div className="details-container">
              <img src="./assets/education.png" alt="education icon" className="icon" />
              <h3>Education</h3>
              <p>
                Bachelor Degree
                <br /> Mobile Application and Technology
              </p>
              <p>
                Senior High School
                <br /> SMA Pangudi Luhur II Servatius
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
A motivated graduate with a Bachelor's degree in Mobile Application and Technology from Bina Nusantara University, eager to contribute to software development projects. Possesses a solid foundation in mobile platform programming (Android/iOS) as well as front-end web development. Possessing communicative, polite, responsible, and eager-to-learn characteristics. Able to keep up with technological advancements and open to challenging career opportunities in either Web Development or Mobile Development.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleScrollToExperience}
      />
    </section>
  );
};

export default About;
