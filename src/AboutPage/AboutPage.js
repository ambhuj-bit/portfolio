import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import ExperienceEduation from "../ExperienceEduation/ExperienceEduation";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import "./About-page.css";

function AboutPage() {
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
          <div>
            <h1>Personal Info </h1>
          </div>
          <div className="about-container">
            <div className="about-item ">
              <ul>
                <li>
                  Name : <span className="span-text">Ambhuj </span>
                </li>
                <li>
                  Last Name : <span className="span-text">Sharma</span>
                </li>
                <li>
                  Nationality : <span className="span-text">Indian</span>
                </li>
                <li>
                  Age : <span className="span-text">27 Years</span>
                </li>
              </ul>
              <div className="custom-btn">
                <CustomButton text="Download CV" path="" icon="arrow-down" />
              </div>
            </div>
            <div className="about-item">
              <ul>
                <li>
                  Address : <span className="span-text">Delhi, India</span>
                </li>
                <li>
                  Phone No. : <span className="span-text">+919717627789</span>
                </li>
                <li>
                  Email :{" "}
                  <span className="span-text">88ambhujsharma@gmail.com</span>
                </li>
                <li>
                  LinkedIn :
                  <a
                    href="https://www.linkedin.com/in/ambhuj-sharma1999"
                    className="span-text"
                  >
                    ambhuj-sharma1999
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid-item experience-card">
              <h3 className="expereince-number">
                2<span>+</span>
              </h3>
              <p>Years of experience</p>
            </div>
            <div className="custom-btn-mob">
              <CustomButton text="Download CV" path="" icon="arrow-down" />
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
