import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import profileImage from '../assets/images/300062377_3027170894246641_1167568765499689940_n.jpg'; // Adjust the image path
import './About.scss'; // Import the SCSS file for styling

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Profile Image on the Left */}
        <div className="profile-image">
          <img src={profileImage} alt="Mostak Ahmed" />
        </div>

        {/* Cards for Education, Skills, and Advertisement */}
        <div className="cards-container">
          {/* Education Card */}
          <div className="card education-card">
            <h2>Educational Background</h2>
            <p className="intro-text">
              <span className="large-text">Hey, I am Mostak!</span>
              <span className="small-text">A passionate and creative</span>
              <span className="highlight-text">Software Engineer</span>
            </p>
            <p>
              I graduated from <strong>Rajshahi University of Engineering and Technology (RUET)</strong> with a degree in <strong>Computer Science and Engineering (CSE)</strong>.
            </p>
            <button className="contact-button" onClick={handleContactClick}>
              Contact Me
            </button>
          </div>

          {/* Skills Card */}
          <div className="card skills-card">
            
            <ul>
              <li>Dart</li>
              <li>Flutter</li>
              <li>C++</li>
              <li>API Integration</li>
              <li>Firebase</li>
              <li>Google Maps</li>
            </ul>
          </div>

          {/* Advertisement Card */}
          <div className="card advertisement-card">
            
            <div className="advertisement-text">
              <p>🚀✨ "Building Smooth, Scalable & Stunning Flutter Apps! 🚀📱"</p>
              <p>💡🎨 "Crafting Beautiful Mobile Experiences with Flutter, One Pixel at a Time! 🎯📲"</p>
              <p>🔥⚡ "Turning Ideas into Seamless Flutter Apps – Fast, Beautiful & Scalable! 🚀📱"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;