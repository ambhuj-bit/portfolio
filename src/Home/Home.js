import React from 'react'
import Navbar from '../Navbar/Navbar'
import Profile from "../assets/profile.jpeg";
import About from "../About/About"
import "./Home.css"

export default function Home() {
  return (
    <div className="main-home">
      <div className="profile-image">
        <img src={Profile} alt="logo" className="imag2" />
      </div>
      <div className="about">
        <About />
      </div>
      <Navbar />
    </div>
  );
}
