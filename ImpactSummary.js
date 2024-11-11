import React from 'react';
import Action from './Action';

const ImpactSummary = ({ actions, totalCO2Reduction, clearActions, removeAction }) => {
  const treesEquivalent = (totalCO2Reduction / 10).toFixed(2);
  let messageColor = 'green';

  if (totalCO2Reduction < 0) messageColor = 'red';
  else if (totalCO2Reduction < 0.5) messageColor = 'orange';

  return (
    <div>
      <h2>Impact Summary</h2>
      {actions.length === 0 ? (
        <p>No actions tracked yet!</p>
      ) : (
        <div>
          <p>Total CO2 Reduction: {totalCO2Reduction.toFixed(2)}kg</p>
          <p style={{ color: messageColor }}>
            {totalCO2Reduction >= 0
              ? `You've saved the equivalent of ${treesEquivalent} trees planted!`
              : `Your actions have a negative impact equivalent to ${Math.abs(treesEquivalent)} trees lost!`}
          </p>
          <button onClick={clearActions}>Clear All</button>
          {actions.map(action => (
            <Action key={action.name} action={action} removeAction={removeAction} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImpactSummary;
