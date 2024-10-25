import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2023/12/19/11/16/red-8457517_640.jpg',
    'https://cdn.pixabay.com/photo/2019/04/27/14/00/indian-4160039_960_720.jpg',
    'https://cdn.pixabay.com/photo/2020/12/10/19/06/wedding-5821104_1280.jpg',
    'https://cdn.pixabay.com/photo/2022/07/16/08/54/bride-7324809_640.jpg',
    'https://cdn.pixabay.com/photo/2019/02/18/11/28/mehendi-4004294_1280.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id='home'
      className="hero" 
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your Name - Photographer</p>
      </div>
    </section>
  );
};

export default Hero;
