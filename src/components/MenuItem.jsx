import React from 'react';
import '../styles/MenuItem.css';

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-details">
        <h2>
          <span className="item-name">{item.name}</span>
          <span className="item-price">{item.price}€</span>
        </h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
