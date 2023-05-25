import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav  >
        <div className='logo-container'>
        <div className='logo-circle'></div>
      <div className="logo"><div>SP.Pr</div>oducts</div>
      </div>
      <ul className="nav-links">
        <li><a href="/">Products</a></li>
        <li><a href="/">Category</a></li>
        <li><a href="/">Customize</a></li>
        <li><a href="/">Collection</a></li>
      </ul>
      <div className="icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
      </div>
      <p className='heart-likes'>2</p>
    </nav>
  );
};

export default Navbar;
