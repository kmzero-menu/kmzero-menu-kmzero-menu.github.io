// src/components/MenuItem.js
import React from 'react';
import '../assets/styles/MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.price} €</p>
      </div>
    </div>
  );
};

export default MenuItem;
