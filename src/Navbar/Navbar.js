import React from "react";
import "./NavBar.css";
import * as Icon from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    {
      path: "/",
      icon: Icon.HouseFill,
      label: "Home",
      id: "home"
    },
    {
      path: "/about",
      icon: Icon.PersonFill,
      label: "About",
      id: "about"
    },
    {
      path: "/contact",
      icon: Icon.EnvelopeFill,
      label: "Contact",
      id: "contact"
    }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-item ${isActive ? "active" : ""}`}
              aria-label={item.label}
            >
              <div className="nav-item-inner">
                <div className="nav-icon-wrapper">
                  <IconComponent className="nav-icon" />
                </div>
                <span className="nav-label">{item.label}</span>
                {isActive && <div className="nav-indicator"></div>}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
