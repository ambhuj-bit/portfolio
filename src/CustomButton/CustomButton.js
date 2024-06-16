import React from 'react'
import './CustomButton.css'
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function CustomButton({ text, path, icon }) {
    
    const renderIcon = () => {
      switch (icon) {
        case "arrow-right":
          return <Icon.ArrowRight className="custom-icon" />;
        case "arrow-down":
          return <Icon.ArrowDown className="custom-icon" />;
        case "message":
          return <Icon.SendFill className="custom-icon" />;
        default:
          return null;
      }
    };
  return (
    <div>
        <div id="more-button">
          <Link to={path} className="nav-link">
            <span className="button-name">{text}</span>
            {renderIcon()}
          </Link>
      </div>
    </div>
  );
}

export default CustomButton
