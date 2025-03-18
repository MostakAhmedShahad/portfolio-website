import React from 'react';
import profileImage from '../assets/images/300062377_3027170894246641_1167568765499689940_n.jpg'; // Adjust the image path
import './Home.scss';

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
         
        <div className="home-image">
          <img src={profileImage} alt="Mostak Ahmed" />
        </div>

        {/* Right Side: Text Content */}
        <div className="home-text">
          <h1>HI, I’m Mostak Ahmed</h1>
          <h2>Flutter App Developer</h2>
          <p>
          A passionate app developer is driven by a love for coding and creating innovative mobile solutions.
           Constantly learn new technologies and strive to build user-friendly, impactful apps.
            Development is not just a job, but a way to turn ideas into reality.
          </p>

          <div className="home-buttons">
            <button className="hire-me">Hire Me</button>
            <button className="lets-talk">Let’s Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;