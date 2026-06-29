import React, { useState, useEffect } from 'react';
import LeadCard from '../lead-card/LeadCard.jsx';
import './accounts-grid.css';

function AccountsGrid({ externalSearchTerm }) {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAccounts = async (term = '') => {
    setLoading(true);
    try {
      const url = term 
        ? `http://localhost:8000/api/v1/accounts?search=${encodeURIComponent(term)}`
        : 'http://localhost:8000/api/v1/accounts';

      const response = await fetch(url);
      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      console.error("Error connecting to Core API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts(externalSearchTerm);
  }, [externalSearchTerm]);

  const handleLeadClick = (dotNumber) => {
    console.log(`Navegando a los detalles del DOT: ${dotNumber}`);
  };

  return (
    <div className="grid-section-wrapper">
      {loading ? (
        <div className="loading-state">Loading records from SQLite database...</div>
      ) : accounts.length > 0 ? (
        <div className="leads-grid">
          {accounts.map((account, index) => (
            <LeadCard 
              key={account.USDOT_Number || index} 
              lead={account} 
              onClick={handleLeadClick}
            />
          ))}
        </div>
      ) : (
        <div className="no-results-state">No accounts found in SQLite database.</div>
      )}
    </div>
  );
}

export default AccountsGrid;