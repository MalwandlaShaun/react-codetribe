import React from 'react';
  import ShoeCard from '../components/ShoeCard';
  import Sidebar from '../components/Sidebar';
  import './WebPage.css'; // Import the CSS file for styling
  
const WebPage = () => {
  const shoes = [
    {
      id: 1,
      name: 'Porsche sports lite',
      price: 84,
      image: 'https://o.remove.bg/downloads/f3d33905-88ed-4d52-bd68-13967ad4c11e/Porsche_design_1-removebg-preview.png',
        bgColor: "orange"
    },
    {
      id: 2,
      name: 'Cararo sports foot',
      price: 67,
      image: "https://o.remove.bg/downloads/e90254c7-a061-4470-a6cd-2b5e208c95b2/Porsche_design_1-removebg-preview.png",
        bgColor: "gray"
    },
    {
      id: 3,
      name: 'Porsche sports lite',
      price: 59,
      image: 'https://o.remove.bg/downloads/f90e08cd-6ffa-4812-93de-b8e226cbf28c/Porsche_design_3-removebg-preview.png',
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
  