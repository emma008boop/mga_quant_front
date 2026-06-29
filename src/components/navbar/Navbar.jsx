import React, { useState } from 'react';
import './navbar.css';

function Navbar({ onSearch }) {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(inputVal); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MGA Quant</div>
      
      <form onSubmit={handleSubmit} className="navbar-search-form">
        <input 
          type="text" 
          placeholder="Search US DOT..." 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="navbar-search-input"
        />
      </form>
    </nav>
  );
}

export default Navbar;