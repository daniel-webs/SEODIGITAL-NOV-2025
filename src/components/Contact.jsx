import React, { useRef } from "react";

import '../styles/Contact.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Contact </h2> 
        
        <br></br>
         <br></br>
          <br></br>
        <h2>SEOdigital</h2>
        <p>Let’s connect. We’re here to help you build digital greatness.</p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="contact-info">
          <div className="info-block">
            <h4>Visit Us</h4>
            <p>SEOdigital HQ</p>
            <p>123 Tech Street, Buenos Aires, Argentina</p>
          </div>

          <div className="info-block">
            <h4>Call or Email</h4>
            <p>📞 +54 11 1234 5678</p>
            <p>📧 contacto@seodigital.com</p>
          </div>

          <div className="info-block">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <iframe
        className="map-container"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1444256341637!2d-58.38155968477038!3d-34.603734880460834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadb5d7e7e29%3A0xd2d22a0d095f749f!2sObelisco%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1625408379511!5m2!1ses-419!2sar"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SEOdigital Location"
      ></iframe>
    </section>)}

    
export default ContactSection;
