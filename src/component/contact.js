// src/component/Contact.js
// src/component/contact.js
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <div className="contact-container">
        {/* Centered Image at the Top */}
        <div className="contact-image">
          <img src="https://ik.imagekit.io/yfnz71p9w/wp-content/uploads/2022/05/prewed-photoshoot-rishikesh-740x600-1.jpeg" alt="Contact" />
        </div>

        <h2>
          <span className="contact-word">Contact</span>
          <span className="contact-word">Me</span>
        </h2>

        <div className="social-links">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Footer Section */}
        <footer className="contact-footer">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
