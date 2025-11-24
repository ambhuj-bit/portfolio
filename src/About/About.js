import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function About() {
  // Calculate years of experience dynamically from March 7, 2022
  const calculateExperience = () => {
    const startDate = new Date("2022-03-07");
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const years = diffDays / 365.25;
    return Math.round(years * 10) / 10;
  };

  const experienceYears = calculateExperience();

  return (
    <div>
      <div className="about-head">
        <div className="decription">
          <div className="greeting">Hello, I'm</div>
          <h1 className="name">AMBHUJ SHARMA</h1>
          <h1 className="designation">SOFTWARE ENGINEER</h1>
          <p className="about-decr">
            I'm a New Delhi based Software & front‑end developer focused on
            crafting clean & user‑friendly experiences. I am passionate about
            building excellent websites and mobile applications that improve the
            lives of those around me.
          </p>

          {/* Quick Stats */}
          <div className="quick-stats">
            <div className="stat-item">
              <div className="stat-number">{experienceYears}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">Gurgaon, Haryana, India</div>
              <div className="stat-label">Location</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">Available</div>
              <div className="stat-label">Status</div>
            </div>
          </div>

          {/* Quick Skills Preview */}
          <div className="quick-skills">
            <span className="skills-label">Expert in:</span>
            <div className="skills-badges">
              <span className="skill-badge">React</span>
              <span className="skill-badge">Angular</span>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">TypeScript</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="home-actions">
            <Link to="/contact" className="contact-btn">
              <span className="button-name">Get in Touch</span>
              <Icon.ArrowRight className="custom-icon" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="home-social">
            <a
              href="https://www.linkedin.com/in/ambhuj-sharma1999"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Icon.Linkedin className="social-icon" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Icon.Github className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/ambhuj.0007"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Icon.Instagram className="social-icon" />
            </a>
            <a
              href="mailto:88ambhujsharma@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Icon.EnvelopeFill className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
