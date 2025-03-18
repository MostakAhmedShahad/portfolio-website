import React from 'react';
import profileImage from '../assets/images/300062377_3027170894246641_1167568765499689940_n.jpg'; // Adjust the image path
import './About.scss'; // Import the SCSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-image">
          <img src={profileImage} alt="Mostak Ahmed" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! My name is <strong>Mostak Ahmed</strong>. I graduated from <strong>Rajshahi University of Engineering and Technology (RUET)</strong> with a degree in <strong>Computer Science and Engineering (CSE)</strong>.
          </p>
          <p>
            I am a passionate <strong>Flutter App Developer</strong> with expertise in building cross-platform mobile applications. My skills include:
          </p>
          <ul>
            <li>Dart</li>
            <li>Flutter</li>
            <li>C++</li>
            <li>API Integration</li>
            <li>Firebase</li>
            <li>Google Maps</li>
          </ul>
          <p>
            I love creating user-friendly and high-performance applications that solve real-world problems. Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;