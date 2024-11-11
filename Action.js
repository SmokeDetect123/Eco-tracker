import React from 'react';

const Action = ({ action, removeAction }) => {
  return (
    <div>
      <span>{action.name} - Count: {action.count}, Total CO2 Reduction: {(action.carbonReduction * action.count).toFixed(2)}kg</span>
      <button onClick={() => removeAction(action.name)}>Delete</button>
    </div>
  );
};

export default Action;
