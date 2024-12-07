import React from 'react';

export function DepositSection({ billData, setBillData }) {
  return (
    <div className="deposit-section">
      <div className="toggle-section">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={billData.hasDeposit}
            onChange={(e) => setBillData({
              ...billData,
              hasDeposit: e.target.checked,
              depositAmount: e.target.checked ? billData.depositAmount : ''
            })}
          />
          Was a Deposit Put Down?
        </label>
      </div>

      {billData.hasDeposit && (
        <>
          <div className="input-group">
            <label htmlFor="depositAmount">Deposit Amount:</label>
            <input
              type="number"
              id="depositAmount"
              value={billData.depositAmount}
              onChange={(e) => setBillData({
                ...billData,
                depositAmount: e.target.value
              })}
              min="0"
              step="0.01"
              placeholder="Enter deposit amount"
            />
          </div>

          <div className="toggle-section">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={billData.isEvenDeposit}
                onChange={(e) => setBillData({
                  ...billData,
                  isEvenDeposit: e.target.checked
                })}
              />
              Did Everyone Put Down the Same Amount?
            </label>
          </div>

          <div className="toggle-section">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={billData.hasMultipleDeposits}
                onChange={(e) => setBillData({
                  ...billData,
                  hasMultipleDeposits: e.target.checked,
                  additionalDeposit: e.target.checked ? billData.additionalDeposit : ''
                })}
              />
              Did Someone Else Also Put a Deposit Down?
            </label>
          </div>

          {billData.hasMultipleDeposits && (
            <div className="input-group">
              <label htmlFor="additionalDeposit">Additional Deposit Amount:</label>
              <input
                type="number"
                id="additionalDeposit"
                value={billData.additionalDeposit}
                onChange={(e) => setBillData({
                  ...billData,
                  additionalDeposit: e.target.value
                })}
                min="0"
                step="0.01"
                placeholder="Enter additional deposit amount"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
} 