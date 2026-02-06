import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ height: 'auto', padding: '4rem 0' }}>
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="about-container" style={{ marginTop: '2rem' }}>
        <div className="details-container" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon"
            style={{ height: '2.5rem' }}
          />
          <p>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDDMTHLNbrPHJVsSqHHMnxVnZLvKswnfSvJkmJdcHdJrRPnqGVfxRpHBnrZFmFsCSdBrXt" style={{ fontSize: '1.2rem' }}>
              nicolas.pepen@gmail.com
            </a>
          </p>
        </div>
        <div className="details-container" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon"
            style={{ height: '2.5rem' }}
          />
          <p>
            <a
              href="https://www.linkedin.com/in/nicholas-tristan-678189293/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.2rem' }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <footer style={{ marginTop: '4rem', textAlign: 'center' }}>
        <p>Copyright © 2025 Nicholas Tristan. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
