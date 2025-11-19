import React from "react";
import "./About.css";
import CustomButton from "../CustomButton/CustomButton";
function About() {
  const buttonClick = () => {
    console.log("Ambhuj IS Here");
  };

  return (
    <div>
      <div className="about-head">
        <div className="decription">
          <h1 className="name">I'M AMBHUJ SHARMA</h1>
          <h1 className="designation">SOFTWARE ENGINEER</h1>
          <p className="about-decr">
            I'm a New Delhi based Software & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent website and mobile appilcation that improves the
            lives of those around me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
