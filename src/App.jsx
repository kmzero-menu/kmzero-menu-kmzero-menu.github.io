import React from 'react';
import Navbar from './components/Navbar';
import MenuSection from './components/MenuSection';
import './assets/styles/App.css';
import panini from './data/panini.json';
import bibite from './data/bibite.json';
import fritti from './data/fritti.json';
import birre from './data/birre.json';
import piatti from './data/piatti.json';

const menuData = {
  Panini: panini,
  Fritti: fritti,
  Piatti: piatti,
  Bibite: bibite,
  Birre: birre
};

const App = () => {
  const categories = Object.keys(menuData);

  const handleCategoryClick = (category) => {
    document.getElementById(category).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar categories={categories} onCategoryClick={handleCategoryClick} />
      <div className="menu">
        {categories.map((category) => (
          <div id={category} key={category}>
            <MenuSection category={category} items={menuData[category]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
