// src/components/MenuSection.js
import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faBottleWater, faBacon, faBeer, faBowlFood} from '@fortawesome/free-solid-svg-icons'; // Importa le icone necessarie
import '../assets/styles/MenuSection.css';

const MenuSection = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const updateIsOpen = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    updateIsOpen();
    window.addEventListener('resize', updateIsOpen);

    return () => window.removeEventListener('resize', updateIsOpen);
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Panini':
        return faHamburger;
      case 'Bibite':
        return faBottleWater;
      case 'Fritti':
        return faBacon;
      case 'Birre':
        return faBeer;
      case 'Piatti':
        return faBowlFood;
      default:
        return null;
    }
  };

  return (
    <div className="menu-section">
      <h2 onClick={() => window.innerWidth <= 768 && setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={getCategoryIcon(category)} className="category-icon" /> {category}
      </h2>
      {isOpen && (
        <div className="menu-items">
          {items.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSection;
