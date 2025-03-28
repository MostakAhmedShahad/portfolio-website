import React, { useEffect, useState } from 'react';
import profileImage from '../assets/images/300062377_3027170894246641_1167568765499689940_n.jpg'; // Adjust the image path
import './Home.scss';

const Home = () => {
  const [text, setText] = useState('\u00A0'); // Start with a non-breaking space
  const fullText = "Hi, my name is...";

  // Text animation for "Hi, my name is" (looping typing effect)
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Reset after a short delay
        setTimeout(() => {
          setText('\u00A0'); // Reset to a non-breaking space
          currentIndex = 0;
        }, 70); // Shorter delay before restarting
      }
    }, 100); // Faster typing speed (50ms per letter)

    return () => clearInterval(interval);
  }, []);

  // Scroll to Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-section">
      <div className="home-content">
        {/* Left Side: Image */}
        <div className="home-image">
          <img src={profileImage} alt="Mostak Ahmed" />
        </div>

        {/* Right Side: Text Content */}
        <div className="home-text">
          <h3>{text}</h3> {/* Typing effect for "Hi, my name is" */}
          <h1>Mostak Ahmed</h1> {/* Name without gradient or shake effect */}
          <h2>I build things for Mobile App</h2>
          <p>
            <strong>I’m a software developer</strong> specializing in building
            <strong> exceptional digital experiences</strong>. Currently, I’m focused on
            building <strong>accessible, human-centered mobile applications</strong>.
          </p>

          <div className="home-buttons">
            <button className="hire-me" onClick={scrollToContact}>Hire Me</button>
            <button className="lets-talk" onClick={scrollToContact}>Let’s Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;