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
        name: "Next.js",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMklBUVBX0yV0l3hIdTIxP-luLdoRYZAzvbA&s",
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
      {
        name: "Tailwind CSS",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
      },
      {
        name: "SonarQube",  
        img:"https://devtools.in/wp-content/uploads/2025/06/sonarqube-1.jpg"
      },
      {
        name: "GitHub",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/2560px-GitHub_Invertocat_Logo.svg.png",
      },
      {
        name: "Docker",
        img: "https://images.ctfassets.net/o7xu9whrs0u9/4sYuVlC3grWV9xqiALyYr2/a52875856c016db3eb86c1d8adced886/Docker.logo2_.png",
      },
      {
        name: "Gitlab",
        img: "https://www.incredibuild.com/wp-content/uploads/2021/04/GitLab01.png",
      },
      {
        name: "Jira",
        img: "https://play-lh.googleusercontent.com/_AZCbg39DTuk8k3DiPRASr9EwyW058pOfzvAu1DsfN9ygtbOlbuucmXaHJi5ooYbokQX=w480-h960-rw",
      },
      {
        name:"Redux Toolkit",
        img:"https://cdn.worldvectorlogo.com/logos/redux.svg"
      },
      {
        name:'Zustand',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s"
      },
      {
        name:"NgRx",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLAFQkkIGfHzUzsdXe4JCUn2UY4smnp1bow&s"
      },
      {
        name:"Confluence",
        img:"https://cdn.worldvectorlogo.com/logos/confluence-1.svg"
      }
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
