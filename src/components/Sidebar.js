import React from 'react';
import imageA from "../assets/images/Porsche_design_A-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa360Degrees } from '@fortawesome/free-regular-svg-icons'

import { faPlus} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
 
  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={fa360Degrees} />
      <div className="sidebar-image-container">
        <img
          className="sidebar-image"
          src= {imageA}
          alt="sidebar Image"
        />

      </div>
      <div className="sidebar-content">
        <h3>Porsche Design</h3>
        <p>Lite racer slip - on</p>
        <p>design</p>
        <div className='sidebar-numbers'>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default Sidebar;
