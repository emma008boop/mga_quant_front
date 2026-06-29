import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import './main-layout.css';

// The 'children' prop injects whatever screen/page is currently active
function MainLayout({ children }) {
  return (
    <div className="layout-container">
      {/* Fixed global navigation bar */}
      <Navbar />
      
      {/* Main content wrapper */}
      <main className="layout-content">
        {children}
      </main>
      
      {/* Optional: You can easily add a global Footer component here later */}
    </div>
  );
}

export default MainLayout;