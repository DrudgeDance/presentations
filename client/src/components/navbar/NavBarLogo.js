import React from 'react';
import './../../styles/navbar/navbar.css';

function NavBarLogo() {
  return (
    <div className="navbar-logo-container">
      <a href="/" className="navbar-logo-link">
        <img
          src="//images.squarespace-cdn.com/content/v1/62448d9d4c6feb44c9fef33c/9d62ec18-66b2-4f07-8016-2e88b5c6e362/RP_Nutrients_logo.png?format=1500w"
          alt="RP Nutrients"
          className="navbar-logo-image"
        />
      </a>
    </div>
  );
}

export default NavBarLogo;