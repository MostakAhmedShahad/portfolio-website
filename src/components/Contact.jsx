import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me for collaborations or inquiries!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;