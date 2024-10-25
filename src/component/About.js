import React, { useState } from 'react';
import './About.css'; // CSS styles for the About section
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon


const About = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleTextClick = () => {
    setIsAnimated(!isAnimated); // Toggle animation on click
  };

  return (
    <section id='about' className="about">
      <div className="contact-container">
        {/* Centered Image at the Top */}
        <div className="contact-image">
          <img src="https://www.rishabhagarwal.com/wp-content/new-uploads/2017/11/NK_PreWed_7.jpg" alt="Contact" />
        </div>
        </div>
      <div className="about-content">
        <img src="https://media.gettyimages.com/id/1007756618/photo/portrait-of-afro-descent-smiling-and-playing-guitar.jpg?s=612x612&w=gi&k=20&c=YxQUAxPr6QOYJzibtJJZJLR8lTgGCiN_Mab-1qPxQpA=" alt="Your Name" className="about-image" />
        <div className={`about-text ${isAnimated ? 'animated' : ''}`} onClick={handleTextClick}>
          <h2>About Me</h2>
          <p>
            I am a passionate photographer specializing in capturing moments that tell a story. 
            With years of experience, I aim to bring your vision to life through my lens.
          </p>
          <p>
            My journey began with a simple camera and a love for adventure. 
            Over the years, I've worked with clients from various backgrounds, and I pride myself on my ability to create beautiful, lasting memories.
          </p>
          <div className="contact-buttons">
            <a href="#contact" className="contact-button">Contact Me</a>
            <a href="https://wa.me/919810165810" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
