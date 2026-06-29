import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle your DOT lookup logic here
    console.log("Searching for business via DOT:", searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand Name */}
        <div className="navbar-logo">
          MGA<span>Quant</span>
        </div>

        {/* DOT Search Bar */}
        <form className="navbar-search" onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Search business by DOT number..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-icon-btn" aria-label="Search">
            {/* Inline SVG Magnifying Glass Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="loupe-icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;