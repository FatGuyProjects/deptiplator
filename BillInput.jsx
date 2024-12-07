import React from 'react';

export function BillInput({ billData, setBillData }) {
  return (
    <div className="input-section">
      <div className="input-group">
        <label htmlFor="totalBill">Total Bill Amount:</label>
        <input
          type="number"
          id="totalBill"
          value={billData.totalBill}
          onChange={(e) => setBillData({
            ...billData,
            totalBill: e.target.value
          })}
          min="0"
          step="0.01"
          placeholder="Enter bill amount"
        />
      </div>

      <div className="input-group">
        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          type="number"
          id="numberOfPeople"
          value={billData.numberOfPeople}
          onChange={(e) => setBillData({
            ...billData,
            numberOfPeople: e.target.value
          })}
          min="1"
          step="1"
          placeholder="Enter number of people"
        />
      </div>
    </div>
  );
} 