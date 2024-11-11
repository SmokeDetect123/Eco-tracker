import React from 'react';

const POSITIVE_ACTIONS = [
  { name: 'Bike to work', carbonReduction: 0.2 },
  { name: 'Recycle paper', carbonReduction: 0.1 },
  { name: 'Plant a tree', carbonReduction: 0.5 },
];

const NEGATIVE_ACTIONS = [
  { name: 'Solo car ride', carbonReduction: -0.3 },
  { name: 'AC on for 1 hour', carbonReduction: -0.2 },
  { name: 'Plastic used', carbonReduction: -0.15 },
  { name: 'Food wasted', carbonReduction: -0.1 },
  { name: 'Water wasted', carbonReduction: -0.05 },
];

const ActionList = ({ addAction }) => {
  return (
    <div className="actions-container">
      <div className="action-box positive-actions">
        <h2>Positive Actions</h2>
        {POSITIVE_ACTIONS.map(action => (
          <div key={action.name} className="action-item">
            <span>{action.name} - {action.carbonReduction}kg CO2</span>
            <button onClick={() => addAction(action)}>Add</button>
          </div>
        ))}
      </div>
       <div className="actions-container">
       <div className="action-box negative-actions">
        <h2>Negative Actions</h2>
        {NEGATIVE_ACTIONS.map(action => (
          <div key={action.name} className="action-item">
            <span>{action.name} - {action.carbonReduction}kg CO2</span>
            <button onClick={() => addAction(action)}>Add</button>
          </div>
        ))}
      </div>
        </div> 
      
    </div>
  );
};

export default ActionList;
