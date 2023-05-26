import React from 'react';
  import ShoeCard from '../components/ShoeCard';
  import Sidebar from '../components/Sidebar';
  import './WebPage.css'; // Import the CSS file for styling
  
  import image1 from "../assets/images/Porsche_design_1-removebg-preview.png"
  import image2 from "../assets/images/Porsche_design_4-removebg-preview.png"
  import image3 from "../assets/images/Porsche_design_1-removebg-preview(1).png"
  
  const WebPage = () => {
  const shoes = [
    {
      id: 1,
      name: 'Porsche sports lite',
      price: 84,
      image: image1,
        bgColor: "orange"
    },
    {
      id: 2,
      name: 'Cararo sports foot',
      price: 67,
      image: image2,
        bgColor: "gray"
    },
    {
      id: 3,
      name: 'Porsche sports lite',
      price: 59,
      image: image3,
        bgColor: "violet"
    }
  ];  
    return (
      <div className="hero-section">
        <Sidebar />
        {shoes.map(shoe => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    );
  };
  
  export default WebPage;
  