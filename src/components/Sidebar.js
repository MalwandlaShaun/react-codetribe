import React from 'react';

const Sidebar = () => {
   return (
    <div className="sidebar">
      <div className="sidebar-image-container">
        <img
          className="sidebar-image"
          src= 'https://o.remove.bg/downloads/da46d259-1ed0-4bba-ae7f-4123c624c91a/Porsche_design_A-removebg-preview.png'
          alt="sidebar Image"
        />
        <div className="image-overlay">
          <p>Overlay Content</p>
        </div>
      </div>
      <div className="sidebar-content">
        <h3>sidebar Title</h3>
        <p>sidebar Description</p>
      </div>
    </div>
  );
};

export default Sidebar;
