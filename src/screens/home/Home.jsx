import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <span className="hero-badge">Next-Gen Quantitative Analytics</span>
          <h1 className="hero-title">
            Smart Data Solutions for <br />
            <span>Modern Quantitative Research</span>
          </h1>
          <p className="hero-subtitle">
            Empower your financial strategies with high-performance metrics, predictive modeling, and streamlined workflows tailored for US markets.
          </p>
        </div>
      </header>

      {/* Brief Features Preview Section */}
      <section className="preview-section">
        <div className="preview-container">
          <div className="preview-card">
            <h3>Advanced Metrics</h3>
            <p>Access processing tools engineered for low-latency calculations.</p>
          </div>
          <div className="preview-card">
            <h3>Risk Management</h3>
            <p>Monitor real-time exposure with institutional-grade custom risk models.</p>
          </div>
          <div className="preview-card">
            <h3>Automated Workflows</h3>
            <p>Seamlessly integrate production pipelines with cloud native storage.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;