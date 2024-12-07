import React from 'react';

export function TipSection({ billData, setBillData }) {
  return (
    <div className="tip-section">
      <div className="input-group">
        <label htmlFor="tipPercentage">Tip Percentage:</label>
        <div className="tip-input-container">
          <input
            type="range"
            id="tipPercentage"
            value={billData.tipPercentage}
            onChange={(e) => setBillData({
              ...billData,
              tipPercentage: e.target.value
            })}
            min="0"
            max="30"
            step="1"
          />
          <input
            type="number"
            value={billData.tipPercentage}
            onChange={(e) => setBillData({
              ...billData,
              tipPercentage: Math.min(Math.max(0, e.target.value), 100)
            })}
            min="0"
            max="100"
            className="tip-number-input"
          />
          <span className="percentage-symbol">%</span>
        </div>
      </div>
    </div>
  );
} 