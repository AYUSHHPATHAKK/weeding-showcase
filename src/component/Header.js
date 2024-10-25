import React from 'react';
import './Header.css'; // We will style the header later

const Header = () => {
  return (
    <nav className="header">
      <div className="navbar-logo">Wedding Moments</div>
      <div className="navbar-menu"></div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
