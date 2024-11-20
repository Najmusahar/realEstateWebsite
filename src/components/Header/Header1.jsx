import React from 'react';
import "./Header1.css"
import { HiLocationMarker } from 'react-icons/hi'; // Import location icon

const   Header1 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        <img src="./logoooo.png" alt="logo" width={100} />
        </div>
        
        <div className="search-bar">
          <select className="search-select">
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="new-launch">PG / Co Living</option>
          </select>
          <input
            type="text"
            placeholder="Search 'Farm house in Punjab below 1 cr'"
          />
          <div className="search-icons">
            <HiLocationMarker color="var(--blue)" size={25} />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
