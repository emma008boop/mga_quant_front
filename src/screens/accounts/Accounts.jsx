import React, { useState, useEffect } from 'react';
import './accounts.css';

function Accounts({ externalSearchTerm }) {
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

  return (
    <div className="accounts-container">
      <header className="accounts-header">
        <div>
          <h1>DOT Business Accounts</h1>
          {externalSearchTerm ? (
            <p className="subtitle">Showing results for: <strong>{externalSearchTerm}</strong></p>
          ) : (
            <p className="subtitle">Real-time SQLite backend dashboard analytics.</p>
          )}
        </div>
      </header>

      <div className="table-wrapper">
        <table className="accounts-table">
          <thead>
            <tr>
              <th>DOT Number</th>
              <th>Legal Name</th>
              <th>DBA Name</th>
              <th>State</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="no-results">Loading records from SQLite database...</td>
              </tr>
            ) : accounts.length > 0 ? (
              accounts.map((account, index) => (
                <tr key={account.USDOT_Number || index}>
                  {/* Usamos las propiedades exactas que expone tu API */}
                  <td className="dot-cell">{account.USDOT_Number || 'N/A'}</td>
                  <td className="bold-cell">{account.Company_Name || 'N/A'}</td>
                  
                  {/* Si estas salen N/A, revisa en SQLite Viewer cómo se llaman exactamente */}
                  <td>{account.DBA_Name || account.dba_name || 'N/A'}</td>
                  <td>{account.State || account.state || 'N/A'}</td>
                  <td>
                    <span className="status-badge active">
                      Active
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-results">No accounts found in SQLite database.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Accounts;