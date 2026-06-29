import React from 'react';
import AccountsGrid from '../../components/accounts-grid/AccountsGrid.jsx';
import './home.css';

function Home({ externalSearchTerm }) {
  return (
    <div className="home-container">
      <section className="home-summary-widgets">
        <div className="widget-card">
          <h3>Total Leads</h3>
          <p className="widget-value">1,240</p>
        </div>
        <div className="widget-card">
          <h3>Active DOTs</h3>
          <p className="widget-value">852</p>
        </div>
      </section>

      <section className="home-main-content">
        <div className="section-title-container">
          <h2>Recent Business Leads</h2>
          <p className="section-subtitle">Real-time database records filtered by search selection.</p>
        </div>
        
        <AccountsGrid externalSearchTerm={externalSearchTerm} />
      </section>
      
      <section className="home-footer-stats">
        {/* Tus otros componentes de la Home van aquí */}
      </section>
    </div>
  );
}

export default Home;