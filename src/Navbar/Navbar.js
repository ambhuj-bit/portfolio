import React from "react";
import sun from "../assets/sun.png";
import Logo from "../assets/logo.png";
import "./NavBar.css";
import * as Icon from "react-bootstrap-icons";
import About from "../About/About";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const { pathname } = useLocation();
  return (
    <div className="sticky">
      <nav className="navbar">
        <ul>
          <li className={pathname === "/" ? "active" : ""}>
            <a href="/" className="nav-link">
              <Icon.HouseFill className="home-icon" />
              <span class="nav-tag">Home</span>
            </a>
          </li>
          <li className={pathname === "/about" ? "active" : ""}>
            <a href="/about" className="nav-link">
              <Icon.PersonFill className="home-icon" />
              <span class="nav-tag">About</span>
            </a>
          </li>
          <li className={pathname === "/contact" ? "active" : ""}>
            <a href="/contact" className="nav-link">
              <Icon.EnvelopeFill className="home-icon" />
              <span class="nav-tag">contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
