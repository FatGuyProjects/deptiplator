export function calculateDistribution(billData) {
  const {
    totalBill,
    numberOfPeople,
    hasDeposit,
    depositAmount,
    isEvenDeposit,
    hasMultipleDeposits,
    additionalDeposit,
    hasGroups,
    groups,
    tipPercentage
  } = billData;

  const bill = parseFloat(totalBill) || 0;
  const tipAmount = (bill * (parseFloat(tipPercentage) / 100)) || 0;
  const totalWithTip = bill + tipAmount;

  // Calculate total deposits
  let totalDeposits = 0;
  if (hasDeposit) {
    totalDeposits += parseFloat(depositAmount) || 0;
    if (hasMultipleDeposits) {
      totalDeposits += parseFloat(additionalDeposit) || 0;
    }
  }

  // Calculate number of people in groups vs individuals
  let totalPeopleInGroups = 0;
  let groupConfigurations = [];
  
  if (hasGroups && groups.length > 0) {
    groups.forEach(group => {
      const groupSize = parseInt(group.size) || 0;
      const groupCount = parseInt(group.count) || 0;
      totalPeopleInGroups += groupSize * groupCount;
      
      groupConfigurations.push({
        size: groupSize,
        count: groupCount,
        perPerson: 0, // Will be calculated below
        totalForGroup: 0
      });
    });
  }

  const individualCount = Math.max(0, parseInt(numberOfPeople) - totalPeopleInGroups);

  // Calculate per-person amount (before deposits)
  const perPersonBase = totalWithTip / parseInt(numberOfPeople);
  
  // Calculate deposit credits
  let depositCredit = 0;
  if (hasDeposit && totalDeposits > 0) {
    if (totalDeposits > totalWithTip) {
      depositCredit = totalDeposits - totalWithTip;
    }
  }

  // Calculate final amounts
  const results = {
    summary: {
      billSubtotal: bill,
      tipAmount,
      totalWithTip,
      totalDeposits,
      depositCredit,
      perPersonBase
    },
    individuals: {
      count: individualCount,
      perPerson: perPersonBase
    },
    groups: groupConfigurations.map(group => ({
      ...group,
      perPerson: perPersonBase,
      totalForGroup: perPersonBase * group.size
    }))
  };

  // Adjust for deposits if necessary
  if (hasDeposit && depositAmount > 0) {
    const depositDeduction = Math.min(totalWithTip, totalDeposits) / parseInt(numberOfPeople);
    results.individuals.perPerson -= depositDeduction;
    results.groups = results.groups.map(group => ({
      ...group,
      perPerson: perPersonBase - depositDeduction,
      totalForGroup: (perPersonBase - depositDeduction) * group.size
    }));
  }

  return results;
} 