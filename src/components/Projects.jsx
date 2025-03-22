import React from 'react';
import project1Image1 from '../assets/images/project1-1.jpg'; // Adjust image paths
import project1Image2 from '../assets/images/project1-2.jpg';
import project1Image3 from '../assets/images/project1-3.jpg';
import project1Image4 from '../assets/images/project1-4.jpg';
import project2Image1 from '../assets/images/project2-1.jpg'; // Adjust image paths
import project2Image2 from '../assets/images/project2-2.jpg';
import project2Image3 from '../assets/images/project2-3.jpg';
import project2Image4 from '../assets/images/project2-4.jpg';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Import icons
import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>

      {/* Project 1: Let's Chat App */}
      <div className="project-card">
        <h2>Let's Chat App</h2>
        <div className="project-content">
          {/* Left Side: Description */}
          <div className="project-details">
            <p>
              <strong>Description:</strong> It's a live chatting app where users can create an account using their email and chat with others by searching for friends via their email IDs. All messages are stored securely in Firebase Datastore.
            </p>
          </div>

          {/* Right Side: Images */}
          <div className="project-images">
            <img src={project1Image1} alt="Let's Chat App Screenshot 1" />
            <img src={project1Image2} alt="Let's Chat App Screenshot 2" />
            <img src={project1Image3} alt="Let's Chat App Screenshot 3" />
            <img src={project1Image4} alt="Let's Chat App Screenshot 4" />
          </div>
        </div>

        {/* Centered Buttons */}
        <div className="project-links">
          <a
            href="https://lets-chat-65327.web.app/" // Replace with your app URL
            target="_blank"
            rel="noopener noreferrer"
            className="app-link"
          >
            <FaExternalLinkAlt className="icon" /> Visit App
          </a>
          <a
            href="https://github.com/MostakAhmedShahad/lets_chat_2.0.git" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="icon" /> GitHub Repository
          </a>
        </div>
      </div>

      {/* Project 2: Live News Update */}
      <div className="project-card">
        <h2>Live News Update</h2>
        <div className="project-content">
          {/* Left Side: Description */}
          <div className="project-details">
            <p>
              <strong>Description:</strong> This app fetches the latest news from international, sports, technology, medicine, and business categories from famous news outlets like BBC, CNN, Al Jazeera, ABC News, etc. It provides real-time updates to keep users informed.
            </p>
          </div>

          {/* Right Side: Images */}
          <div className="project-images">
            <img src={project2Image1} alt="Live News Update Screenshot 1" />
            <img src={project2Image2} alt="Live News Update Screenshot 2" />
            <img src={project2Image3} alt="Live News Update Screenshot 3" />
            <img src={project2Image4} alt="Live News Update Screenshot 4" />
          </div>
        </div>

        {/* Centered Buttons */}
        <div className="project-links">
          <a
            href="https://github.com/MostakAhmedShahad/News_App"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub className="icon" /> GitHub Repository
          </a>
        </div>
      </div>

      {/* Add more projects here if needed */}
    </div>
  );
};

export default Projects;