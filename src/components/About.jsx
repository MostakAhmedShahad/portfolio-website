import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/images/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg';
import './About.scss';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'; // Import icons

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
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
        <div className="space-between"></div>

        {/* Right Section: Mission, Vision, Skills, and Advertisement */}
        <div className="right-section">
          {/* Mission & Vision Card */}
          <div className="card mission-vision-card">
            <h2>Mission & Vision</h2>
            <div className="mission-vision-grid">
              <div className="mission">
                <h3>
                  <FaBullseye className="icon" /> Mission
                </h3>
                <p>
                  My mission is to build <strong>high-performance Flutter apps</strong> that deliver{' '}
                  <strong>seamless user experiences</strong>. I focus on creating solutions that are{' '}
                  <strong>accessible</strong> and <strong>scalable</strong>, while innovating with{' '}
                  <strong>cutting-edge technologies</strong> to push the boundaries of what’s possible.
                </p>
              </div>
              <div className="vision">
                <h3>
                  <FaEye className="icon" /> Vision
                </h3>
                <p>
                  My vision is to lead in the field of <strong>Flutter app development</strong>, creating apps that{' '}
                  <strong>inspire</strong> and <strong>empower</strong> users worldwide. I aim to push the boundaries of{' '}
                  <strong>mobile technology</strong> and build a <strong>global impact</strong> through innovation and
                  creativity.
                </p>
              </div>
              <div className="values">
                <h3>
                  <FaHeart className="icon" /> Values
                </h3>
                <p>
                  I value <strong>innovation</strong>, <strong>quality</strong>, and <strong>user-centric design</strong>. My goal is to create apps that are not only functional but also{' '}
                  <strong>beautiful</strong> and <strong>impactful</strong>.
                </p>
              </div>
            </div>
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