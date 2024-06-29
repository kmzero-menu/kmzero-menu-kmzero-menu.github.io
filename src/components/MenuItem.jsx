import React from 'react';
import '../assets/styles/MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price} €</p>
      </div>
    </div>
  );
};

export default MenuItem;
