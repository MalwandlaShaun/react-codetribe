import React from 'react';
import imageA from "../assets/images/Porsche_design_A-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import deg360 from "../assets/icons/002-360-degrees.png"

const Sidebar = () => {

  return (
    <div className="sidebar">
<div className='icon-degrees' >
  5
</div>
<img src={deg360} alt="icon" className='deg360'/>
      <div className="sidebar-image-container">
        <img
          className="sidebar-image"
          src= {imageA}
          alt="sidebar"
        />

      </div>
      <div className='sidebar-price'>$84</div>
      <div className="sidebar-content">
        <p>Porsche Design</p>
        <p>Lite racer slip - on</p>
        <p>design</p>
        <div className='sidebar-numbers'>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>
      <div className='sidebar-boxes'>
        <div class="square">
          <div class="circle-1"></div>
        </div>

        <div class="square">
          <div class="circle-2"></div>
        </div>
      </div>
      

      <FontAwesomeIcon icon={faPlus} className='sidebar-plus' />
    </div>
  );
};

export default Sidebar;
