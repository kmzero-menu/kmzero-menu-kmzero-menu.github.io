// src/components/Navbar.js
import React from 'react';
import '../assets/styles/Navbar.css';

const Navbar = ({ categories, onCategoryClick }) => {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Restaurant Logo" className="logo" />
      <ul className="nav-links">
        {categories.map((category) => (
          <li key={category} onClick={() => onCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
