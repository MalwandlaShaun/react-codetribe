import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <a href="#">New arrivals</a>
        <a href="#">Popular</a>
        <a href="#">Recommended</a>
      </div>
      <div className="navigation">
        <div className="back">Back</div>
        <div className="next">Next</div>
      </div>
    </footer>
  );
};

export default Footer;
