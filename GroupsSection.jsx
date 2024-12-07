import React from 'react';

export function GroupsSection({ billData, setBillData }) {
  const handleAddGroup = () => {
    setBillData({
      ...billData,
      groups: [...billData.groups, { size: 2, count: 1 }]
    });
  };

  const handleRemoveGroup = (index) => {
    const newGroups = billData.groups.filter((_, i) => i !== index);
    setBillData({
      ...billData,
      groups: newGroups
    });
  };

  const updateGroup = (index, field, value) => {
    const newGroups = [...billData.groups];
    newGroups[index] = { ...newGroups[index], [field]: parseInt(value) || 0 };
    setBillData({
      ...billData,
      groups: newGroups
    });
  };

  return (
    <div className="groups-section">
      <div className="toggle-section">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={billData.hasGroups}
            onChange={(e) => setBillData({
              ...billData,
              hasGroups: e.target.checked,
              groups: e.target.checked ? billData.groups : []
            })}
          />
          Couples and Groups
        </label>
      </div>

      {billData.hasGroups && (
        <div className="groups-container">
          {billData.groups.map((group, index) => (
            <div key={index} className="group-item">
              <div className="group-inputs">
                <div className="input-group">
                  <label>Group Size:</label>
                  <select
                    value={group.size}
                    onChange={(e) => updateGroup(index, 'size', e.target.value)}
                  >
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Number of Such Groups:</label>
                  <input
                    type="number"
                    value={group.count}
                    onChange={(e) => updateGroup(index, 'count', e.target.value)}
                    min="1"
                    step="1"
                  />
                </div>
              </div>
              <button
                className="remove-group-btn"
                onClick={() => handleRemoveGroup(index)}
              >
                Remove Group
              </button>
            </div>
          ))}
          <button className="add-group-btn" onClick={handleAddGroup}>
            Add Another Group
          </button>
        </div>
      )}
    </div>
  );
} 