import React, { useState } from 'react';
import '../styles/DepTiplator.css';
import { BillInput } from './BillInput';
import { DepositSection } from './DepositSection';
import { GroupsSection } from './GroupsSection';
import { TipSection } from './TipSection';
import { Results } from './Results';
import { calculateDistribution } from '../utils/calculations';

export function DepTiplator() {
  const [billData, setBillData] = useState({
    totalBill: '',
    numberOfPeople: '',
    hasDeposit: false,
    depositAmount: '',
    isEvenDeposit: true,
    hasMultipleDeposits: false,
    additionalDeposit: '',
    hasGroups: false,
    groups: [],
    tipPercentage: 15
  });

  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    const distribution = calculateDistribution(billData);
    setResults(distribution);
  };

  return (
    <div className="deptiplator">
      <BillInput 
        billData={billData} 
        setBillData={setBillData} 
      />
      
      <DepositSection 
        billData={billData} 
        setBillData={setBillData} 
      />
      
      <GroupsSection 
        billData={billData} 
        setBillData={setBillData} 
      />
      
      <TipSection 
        billData={billData} 
        setBillData={setBillData} 
      />

      <button 
        className="calculate-button"
        onClick={handleCalculate}
        disabled={!billData.totalBill || !billData.numberOfPeople}
      >
        Calculate Tips and Totals
      </button>

      {results && <Results results={results} />}
    </div>
  );
} 