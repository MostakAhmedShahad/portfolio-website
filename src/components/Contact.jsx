import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me for collaborations or inquiries!</p>

      <div className="contact-container">
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>mostakahmedshahad74@gmail.com</span>
          </div>
          <div className="info-item">
            <FaWhatsapp className="icon" />
            <span>+880 1734225094</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Based in Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Right Side: Contact Form and Social Links */}
        <div className="contact-content">
          {/* Contact Form */}
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://www.facebook.com/mostak.ahmed.shahad.2024/" // Replace with your Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaFacebook className="icon" /> Facebook
            </a>
            <a
              href="https://github.com/MostakAhmedShahad" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="icon" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mostak-ahmed-3165962a0/" // Replace with your LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="icon" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} Mostak Ahmed. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;