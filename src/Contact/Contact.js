import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Contact.css'
import * as Icon from "react-bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomButton from '../CustomButton/CustomButton';

function Contact() {
  return (
    <div className="contact-main">
      <div class="contact-title">
        <h1 className="contact-heading">Contact</h1>
        <div class="get-in">
          get in <span className="touch-span">Touch</span>
        </div>
      </div>
      <div className="contact-page">
        <div>
          <h2>DON'T BE SHY!</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="icons-detail">
            <i className="bi bi-envelope-open-fill contact-icon"></i>
            <div className="contact-info">
              <p className="contact-dec">mail me</p>
              <p className="contact-det">88ambhujsharma@gmail.com</p>
            </div>
          </div>
          <div className="icons-detail">
            <i className="bi bi-telephone-fill contact-icon"></i>
            <div className="contact-info">
              <p className="contact-dec">call me</p>
              <p className="contact-det">+91 9717627789</p>
            </div>
          </div>
          <div className="icons-detail">
            <i className="bi bi-linkedin contact-icon"></i>
            <div className="contact-info">
              <p className="contact-dec">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ambhuj-sharma1999?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <p className="contact-det">@ambhuj-Sharma1999</p>
              </a>
            </div>
          </div>
          <div className="icons-detail">
            <i className="bi bi-linkedin contact-icon"></i>
            <div className="contact-info">
              <p className="contact-dec">Instagram</p>
              <a
                href="https://www.instagram.com/ambhuj.0007?igsh=aGdvd3A5Nnp0ODRt"
                target="_blank"
              >
                <p className="contact-det">@ambhuj</p>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="input-feiled">
            <input placeholder="Your Name " disabled="true"></input>
            <input placeholder="Your Email " disabled="true"></input>
            <input placeholder="Subject" disabled="true"></input>
          </div>
          <textarea
            rows="4"
            cols="64"
            name="comment"
            form="usrform"
            placeholder="Your Message"
            disabled="true"
          ></textarea>
          <div className="message-btn">
            <CustomButton text="send message" path="/" icon="message" />
          </div>
          <p className="note-p">
            <span className="note-span">Note</span> : Input fields are currently
            disabled, but I will update them soon
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Contact
