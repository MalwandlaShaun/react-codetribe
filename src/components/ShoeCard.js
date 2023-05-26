import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'


const ShoeCard = ({ shoe }) => {
  return (
    <div className="card">
      <div className="card-img-container"style={{backgroundColor:shoe.bgColor}}>
      <FontAwesomeIcon icon={faPlus} className='card-plus' />
      <img src={shoe.image} alt={shoe.name} className="card-img"  />
      </div>
      <div className="card-content">
        <h3 className="card-title">{shoe.name}</h3>
        <p className='card-price'>${shoe.price}</p>
        <p className="card-details">View details &nbsp;<FontAwesomeIcon icon={faArrowRight} className="arrow-icon" ></FontAwesomeIcon></p>
      </div>
    </div>
  );
};

export default ShoeCard;
