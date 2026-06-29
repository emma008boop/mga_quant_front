import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import './main-layout.css';

function MainLayout({ children, onSearchSubmit }) {
  return (
    <div className="layout-container">
      <Navbar onSearch={onSearchSubmit} />
      
      <main className="layout-content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;