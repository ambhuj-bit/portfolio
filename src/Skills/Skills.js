import React from 'react'
import "./Skills.css"
import Logo from "../assets/logo.png";

function Skills() {

    const technologies = [
      {
        name: "Angular",
        img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
      },
      {
        name: "React",
        img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      },
      {
        name: "JavaScript",
        img: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
      },
      {
        name: "TypeScript",
        img: "https://cdn1.iconfinder.com/data/icons/brands-5/512/fi-brands-typescript-128.png",
      },
      {
        name: "HTML",
        img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png",
      },
      {
        name: "CSS",
        img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png",
      },
      {
        name: "Bootstrap",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
      },
      {
        name: "NodeJs",
        img: "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-1024.png",
      },
    ];
  
  
  return (
    <div className="skills-mian">
      <div className="skills-head">
       my skills
      </div>
      <div className="grid-container">
        {technologies.map((tech) => (
          <div key={tech.name} className="grid-item">
            <img src={tech.img} alt={tech.name} className="tech-image" />
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills
