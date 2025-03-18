import React from 'react';
import project1Image1 from '../assets/images/project1-1.jpg'; // Adjust image paths
import project1Image2 from '../assets/images/project1-2.jpg';
import project1Image3 from '../assets/images/project1-3.jpg';
import project1Image4 from '../assets/images/project1-4.jpg';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Import icons
import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on:</p>

      {/* Project 1: Let's Chat App */}
      <div className="project-card">
        <h2>Let's Chat App</h2>
        <div className="project-images">
          <img src={project1Image1} alt="Let's Chat App Screenshot 1" />
          <img src={project1Image2} alt="Let's Chat App Screenshot 2" />
          <img src={project1Image3} alt="Let's Chat App Screenshot 3" />
          <img src={project1Image4} alt="Let's Chat App Screenshot 4" />
        </div>
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

      {/* Add more projects here if needed */}
    </div>
  );
};

export default Projects;