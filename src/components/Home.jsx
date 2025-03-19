import React from 'react';
import profileImage from '../assets/images/300062377_3027170894246641_1167568765499689940_n.jpg'; // Adjust the image path
import './Home.scss';

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        {/* Left Side: Image */}
        <div className="home-image">
          <img src={profileImage} alt="Mostak Ahmed" />
        </div>

        {/* Right Side: Text Content */}
        <div className="home-text">
          <h3>Hi, my name is</h3>
          <h1>Mostak Ahmed</h1>
          <h2>I build things for mobile.</h2>
          <p>
            I’m a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered mobile applications.
          </p>

          <div className="home-buttons">
            <button className="check-course">Check out my course!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;