import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import ExperienceEduation from "../ExperienceEduation/ExperienceEduation";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import * as Icon from "react-bootstrap-icons";
import "./About-page.css";

function AboutPage() {
  // Calculate years of experience dynamically from March 7, 2022
  const calculateExperience = () => {
    const startDate = new Date("2022-03-07");
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const diffTime = Math.abs(currentDate - startDate);
    
    // Convert to days
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    
    // Calculate years with decimal precision (accounting for leap years)
    const years = diffDays / 365.25;
    
    // Round to 1 decimal place
    return Math.round(years * 10) / 10;
  };

  const experienceYears = calculateExperience();

  return (
    <div className="main-about">
      <div className="resume-header">
        <div className="resume">Resume</div>
        <h1 className="about-me">
          About <span className="me">Me</span>
        </h1>
      </div>
      <div className="main-sub">
        <div className="infosection">
          <div className="section-header-wrapper">
            <h1 className="section-title">Personal Information</h1>
            <p className="section-subtitle">Get to know more about me</p>
          </div>
          <div className="personal-info-container">
            <div className="personal-info-grid">
              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Icon.PersonFill className="info-icon" />
                </div>
                <div className="info-content">
                  <p className="info-label">Full Name</p>
                  <h3 className="info-value">Ambhuj Sharma</h3>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Icon.GeoAltFill className="info-icon" />
                </div>
                <div className="info-content">
                  <p className="info-label">Location</p>
                  <h3 className="info-value">Delhi, India</h3>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Icon.TelephoneFill className="info-icon" />
                </div>
                <div className="info-content">
                  <p className="info-label">Phone</p>
                  <h3 className="info-value">
                    <a href="tel:+919717627789" className="info-link">
                      +91 97176 27789
                    </a>
                  </h3>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Icon.EnvelopeFill className="info-icon" />
                </div>
                <div className="info-content">
                  <p className="info-label">Email</p>
                  <h3 className="info-value">
                    <a href="mailto:88ambhujsharma@gmail.com" className="info-link">
                      88ambhujsharma@gmail.com
                    </a>
                  </h3>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon-wrapper">
                  <Icon.Linkedin className="info-icon" />
                </div>
                <div className="info-content">
                  <p className="info-label">LinkedIn</p>
                  <h3 className="info-value">
                    <a
                      href="https://www.linkedin.com/in/ambhuj-sharma1999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link"
                    >
                      ambhuj-sharma1999
                    </a>
                  </h3>
                </div>
              </div>

              <div className="info-card experience-highlight">
                <div className="info-icon-wrapper highlight-icon">
                  <Icon.BriefcaseFill className="info-icon" />
                </div>
                <div className="info-content">
                  <p className="info-label">Experience</p>
                  <h3 className="expereince-number highlight-number">
                    {experienceYears}
                    <span className="years-label">Years</span>
                  </h3>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <Skills />
        <ExperienceEduation />
        <Navbar />
      </div>
    </div>
  );
}

export default AboutPage;
