// src/component/Portfolio.js
import React from 'react';
import './portfolio.css';


const Portfolio = () => {
  const projects = [
    { id: 1, image: 'https://cdn0.weddingwire.in/article-gallery-o/00000/3_2/960/jpg/articulos-india/2019/non-troncales/western-look/hitched-clicked-western-look-cover.jpeg', title: 'Project 1', description: 'Photography Shoot 1' },
    { id: 2, image: 'https://cdn.pixabay.com/photo/2019/05/30/14/43/bride-4239982_1280.jpg', title: 'Project 2', description: 'Photography Shoot 2' },
    { id: 3, image: 'https://cdn.pixabay.com/photo/2022/01/30/05/50/couple-6979878_1280.jpg', title: 'Project 3', description: 'Photography Shoot 3' },
    { id: 4, image: 'https://cdn.pixabay.com/photo/2017/08/06/18/05/people-2594745_1280.jpg', title: 'Project 4', description: 'Photography Shoot 4' },
    { id: 5, image: 'https://weddingdiariesbyomp.com/wp-content/uploads/Prewedding-Shoot-in-Goa-1-1.webp', title: 'Project 5', description: 'Photography Shoot 5' },
    { id: 5, image: 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/002/700/674/new_large/studiordp.jpg?1623613727', title: 'Project 5', description: 'Photography Shoot 5' }

  ];

  return (
    <section id='portfolio' className="portfolio-section">
      
      {projects.map((project) => (
        <div key={project.id} className="portfolio-item">
          <img src={project.image} alt={project.title} />
          <div className="portfolio-title">{project.title}</div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;



