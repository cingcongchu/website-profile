import React from 'react';

const Profile = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src="./assets/IMG_2170ok-modified-removebg-preview-modified.png"
          alt="Nicholas Tristan profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello!, I'm</p>
        <h1 className="title">Nicholas Tristan</h1>
        <p className="section__text__p2">Mobile Application Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/resume-example.pdf')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleScrollToContact}>
            Contact Me
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/nicholas-tristan-678189293/', '_blank')}
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => window.open('https://github.com/cingcongchu/', '_blank')}
          />
          <img
            src="./assets/ig-removebg-preview.png"
            alt="My Instagram profile"
            className="icon"
            onClick={() => window.open('https://www.instagram.com/nchtrstn/', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
