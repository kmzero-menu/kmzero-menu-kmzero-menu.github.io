import React from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

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
        <li className="instagram">
          <a href="https://www.instagram.com/kmzeroitalianpub/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="instagram-logo"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
