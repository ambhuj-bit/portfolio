import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Contact.css'
import * as Icon from "react-bootstrap-icons";
import CustomButton from '../CustomButton/CustomButton';

function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-header">
        <div className="contact-heading-bg">Contact</div>
        <h1 className="contact-title-text">
          Get in <span className="touch-span">Touch</span>
        </h1>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-intro">
            <h2 className="intro-title">Don't Be Shy!</h2>
            <p className="intro-text">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>

          <div className="contact-methods">
            <div className="contact-method-card">
              <div className="contact-icon-wrapper">
                <Icon.EnvelopeOpenFill className="contact-icon" />
              </div>
              <div className="contact-method-info">
                <p className="contact-method-label">Email</p>
                <a href="mailto:88ambhujsharma@gmail.com" className="contact-method-value">
                  88ambhujsharma@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon-wrapper">
                <Icon.TelephoneFill className="contact-icon" />
              </div>
              <div className="contact-method-info">
                <p className="contact-method-label">Phone</p>
                <a href="tel:+919717627789" className="contact-method-value">
                  +91 97176 27789
                </a>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon-wrapper">
                <Icon.Linkedin className="contact-icon" />
              </div>
              <div className="contact-method-info">
                <p className="contact-method-label">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/ambhuj-sharma1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-value"
                >
                  ambhuj-sharma1999
                </a>
              </div>
            </div>

            <div className="contact-method-card">
              <div className="contact-icon-wrapper">
                <Icon.Instagram className="contact-icon" />
              </div>
              <div className="contact-method-info">
                <p className="contact-method-label">Instagram</p>
                <a
                  href="https://www.instagram.com/ambhuj.0007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-value"
                >
                  @ambhuj.0007
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="form-title">Send Me a Message</h2>
          <form className="contact-form">
            <div className="input-fields">
              <input 
                type="text" 
                placeholder="Your Name" 
                disabled={true}
                className="form-input"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                disabled={true}
                className="form-input"
              />
              <input 
                type="text" 
                placeholder="Subject" 
                disabled={true}
                className="form-input"
              />
            </div>
            <textarea
              rows="6"
              placeholder="Your Message"
              disabled={true}
              className="form-textarea"
            ></textarea>
            <div className="form-submit">
              <CustomButton text="Send Message" path="/" />
            </div>
            <p className="form-note">
              <span className="note-highlight">Note</span>: Input fields are currently
              disabled, but I will update them soon.
            </p>
          </form>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Contact
