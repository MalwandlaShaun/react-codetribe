import React from 'react';
  import ShoeCard from '../components/ShoeCard';
  import Sidebar from '../components/Sidebar';
  import './WebPage.css'; 
  import Footer from '../components/Footer';

  import image1 from "../assets/images/Porsche_design_1-removebg-preview.png"
  import image2 from "../assets/images/Porsche_design_4-removebg-preview.png"
  import image3 from "../assets/images/Porsche_design_1-removebg-preview(1).svg"
  import image4 from "../assets/images/Screenshot_1-removebg-preview.png"
  import image5 from "../assets/images/Screenshot_2-removebg-preview.png"
  import image6 from "../assets/images/Screenshot_3-removebg-preview.png"
  import image7 from "../assets/images/Screenshot_4-removebg-preview.png"
  
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
        bgColor: "pink"
    },
    {
      id: 4,
      name: 'Porsche summer',
      price: 79,
      image: image4,
        bgColor: "yellow"
    },
    {
      id: 5,
      name: 'Porsche automn',
      price: 76,
      image: image5,
        bgColor: "blue"
    },
    {
      id: 6,
      name: 'Porsche winter',
      price: 44,
      image: image6,
        bgColor: "violet"
    },
    {
      id: 7,
      name: 'Porsche spring',
      price: 74,
      image: image7,
        bgColor: "violet"
    },
    {
      id: 8,
      name: 'Porsche ocean',
      price: 89,
      image: image3,
        bgColor: "violet"
    }
  ];  
  
    return (
      <>
      <div className="hero-section">
        <Sidebar />
      <div className='shoe-footer'>
        <div className='shoe'>
        {shoes.map(shoe => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
      <Footer />
      </div>
      </div>
      
      </>
    );
  };
  
  export default WebPage;
  