import React from 'react';
import './testimonial.js';

const testimonialsData = [
  {
    name: 'John Doe',
    text: 'This service was amazing! I would highly recommend it to anyone.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    text: 'A wonderful experience! The team was very professional.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Emily Johnson',
    text: 'Exceeded my expectations! Will definitely come back.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Michael Brown',
    text: 'Fantastic service and support. I couldn’t be happier!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials' className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
