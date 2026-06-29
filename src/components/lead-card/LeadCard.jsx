import React from 'react';
import './lead-card.css';

function LeadCard({ lead, onClick }) {
  return (
    <div className="lead-card" onClick={() => onClick(lead.USDOT_Number)}>
      <div className="lead-card-header">
        <span className="dot-badge">DOT: {lead.USDOT_Number}</span>
      </div>
      <div className="lead-card-body">
        <h3 className="company-title">{lead.Company_Name}</h3>
      </div>
      <div className="lead-card-footer">
        <span className="view-details-link">View Full Account Details →</span>
      </div>
    </div>
  );
}

export default LeadCard;