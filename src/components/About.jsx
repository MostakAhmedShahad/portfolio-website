import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import profileImage from '../assets/images/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg'; // Adjust the image path
import './About.scss'; // Import the SCSS file for styling

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Left Section: Profile Image and Additional Content */}
        <div className="left-section">
          <div className="profile-image">
            <img src={profileImage} alt="Mostak Ahmed" />
          </div>
          <div className="card">
            <h2>Quick Facts</h2>
            <ul>
              <li>🎓 Graduated from RUET, CSE</li>
              <li>📱 Flutter Developer</li>
              <li>💻 Passionate about Mobile Apps</li>
              <li>🌍 Building Global Solutions</li>
            </ul>
            <button className="contact-button" onClick={handleContactClick}>
              Contact Me
            </button>
          </div>
        </div>
        <div className='space-between'>

        </div>

        {/* Right Section: Mission, Vision, Skills, and Advertisement */}
        <div className="right-section">
          {/* Mission & Vision Card */}
          <div className="card mission-vision-card">
            <h2>Mission & Vision</h2>
            <ul>
              <li>
                <strong>Mission:</strong>
                <ul>
                  <li>Build high-performance Flutter apps.</li>
                  <li>Deliver seamless user experiences.</li>
                  <li>Focus on accessibility and scalability.</li>
                  <li>Innovate with cutting-edge technologies.</li>
                </ul>
              </li>
              <li>
                <strong>Vision:</strong>
                <ul>
                  <li>Lead in Flutter app development.</li>
                  <li>Create apps that inspire and empower.</li>
                  <li>Push the boundaries of mobile technology.</li>
                  <li>Build a global impact through innovation.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Skills Card */}
          <div className="card skills-card">
            <h2>Skills</h2>
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