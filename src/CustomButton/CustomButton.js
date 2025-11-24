import React from 'react'
import './CustomButton.css'
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function CustomButton({ text, path, icon, download, downloadUrl }) {
    
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

    const handleDownload = (e) => {
      if (downloadUrl) {
        // If downloadUrl is provided, create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = text.replace(/\s+/g, '_') + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (download) {
        // If download prop is true but no URL, open mailto
        window.location.href = 'mailto:88ambhujsharma@gmail.com?subject=Request for CV&body=Hi Ambhuj, I would like to request your CV.';
      }
    };

    // If download prop is true or downloadUrl exists, render as button instead of Link
    if (download || downloadUrl) {
      return (
        <div>
          <div id="more-button">
            <button onClick={handleDownload} className="nav-link" type="button">
              {renderIcon()}
              <span className="button-name">{text}</span>
            </button>
          </div>
        </div>
      );
    }

  return (
    <div>
        <div id="more-button">
          <Link to={path || '#'} className="nav-link">
            <span className="button-name">{text}</span>
            {renderIcon()}
          </Link>
      </div>
    </div>
  );
}

export default CustomButton
