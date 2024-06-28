import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faBottleWater, faBacon, faBeer, faBowlFood } from '@fortawesome/free-solid-svg-icons'; // Importa le icone necessarie
import '../assets/styles/MenuSection.css';

const MenuSection = ({ category, items }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <h2 onClick={() => setIsOpen(!isOpen)}>
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
