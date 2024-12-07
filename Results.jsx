import React from 'react';

export function Results({ results }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="results-section">
      <h2>Bill Summary</h2>
      <div className="summary-grid">
        <div className="summary-item">
          <span>Bill Subtotal:</span>
          <span>{formatCurrency(results.summary.billSubtotal)}</span>
        </div>
        <div className="summary-item">
          <span>Tip Amount ({(results.summary.tipAmount / results.summary.billSubtotal * 100).toFixed(1)}%):</span>
          <span>{formatCurrency(results.summary.tipAmount)}</span>
        </div>
        <div className="summary-item total">
          <span>Total with Tip:</span>
          <span>{formatCurrency(results.summary.totalWithTip)}</span>
        </div>
        
        {results.summary.totalDeposits > 0 && (
          <div className="summary-item deposits">
            <span>Total Deposits:</span>
            <span>{formatCurrency(results.summary.totalDeposits)}</span>
          </div>
        )}
      </div>

      {results.summary.depositCredit > 0 && (
        <div className="deposit-credit">
          <h3>Deposit Credit</h3>
          <p>
            Amount to be returned to depositors: {formatCurrency(results.summary.depositCredit)}
          </p>
        </div>
      )}

      <div className="distribution">
        <h3>Payment Distribution</h3>
        
        {results.individuals.count > 0 && (
          <div className="distribution-section">
            <h4>Individuals</h4>
            <div className="distribution-item">
              <span>
                {results.individuals.count} {results.individuals.count === 1 ? 'person' : 'people'} paying:
              </span>
              <span>{formatCurrency(results.individuals.perPerson)} each</span>
            </div>
          </div>
        )}

        {results.groups.length > 0 && (
          <div className="distribution-section">
            <h4>Groups</h4>
            {results.groups.map((group, index) => (
              <div key={index} className="distribution-item">
                <div className="group-detail">
                  <span>
                    {group.count} {group.count === 1 ? 'group' : 'groups'} of {group.size}:
                  </span>
                  <div className="group-amounts">
                    <span>{formatCurrency(group.perPerson)} per person</span>
                    <span>{formatCurrency(group.totalForGroup)} per group</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 