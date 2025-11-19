import React from "react";
import "./ExperienceEduation.css";
import * as Icon from "react-bootstrap-icons";

function ExperienceEduation() {
 
      const expereince = [
        {
          year: "2022 - present",
          designation: "web developer",
          company: "Searce",
          description:
            "As a Software Engineer at Searce I develop and maintain web applications using React, Angular, and Node.js. I have a proven track record of successfully delivering projects for clients across various industries. My focus is on building intuitive, responsive, and secure web solutions that meet the needs and expectations of end-users",
          isEmployee: true,
        },
        {
          year: "2016 - 2020",
          designation: "B.Tech",
          company: "B K birla institute of engineering & technology",
          description:
            "Completed Bachelor of Technology, majoring in Computer Science from B k Birla Institute of Engineering & Technology, Pilani, Rajasthan.",
          isEmployee: false,
        },
        {
          year: "2014 - 2015",
          designation: "Sales Boy",
          company: "Park Avenue",
          description:
            "I worked as a salesman at Park Avenue, part of the Raymond Group. My role involved assisting customers in finding their desired clothing items and managing customer interactions to boost sales.",
          isEmployee: true,
        },
        {
          year: "2014",
          designation: "Schooling",
          company: "CBSE board",
          description: "Completed 10+2 from Govt Sarvodaya Vidyala Delhi",
          isEmployee: false,
        },
      ];
    
    return (
      <div className="expereince-footer">
        <div className="experience-main">
          <div className="experience-head">Experience & Education</div>
          <div className="experience-grid">
            {expereince.map((item, index) => (
              <div className="experience-item" key={index}>
                <div className="icon-wrapper">
                  {item.isEmployee ? (
                    <Icon.BriefcaseFill className="cap-icon" />
                  ) : (
                    <Icon.MortarboardFill className="cap-icon" />
                  )}
                </div>
                <div className="exp-edu">
                  <div className="year-tag">{item.year}</div>
                  <div className="designation">
                    {item.designation} - <span>{item.company}</span>
                  </div>
                  <p className="description-p">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ExperienceEduation;
