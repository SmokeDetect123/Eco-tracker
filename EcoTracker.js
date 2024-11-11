import React, { useState, useEffect } from 'react';
import ActionList from './ActionList';
import ImpactSummary from './ImpactSummary';
import './EcoTracker.css';

function EcoTracker() {
  const [actions, setActions] = useState([]);
  const [totalCO2Reduction, setTotalCO2Reduction] = useState(0);

  const addAction = (action) => {
    setActions((prevActions) => {
      const existingAction = prevActions.find(a => a.name === action.name);
      if (existingAction) {
        return prevActions.map(a =>
          a.name === action.name ? { ...a, count: a.count + 1 } : a
        );
      } else {
        return [...prevActions, { ...action, count: 1 }];
      }
    });
  };

  useEffect(() => {
    const totalReduction = actions.reduce((total, action) => total + (action.carbonReduction * action.count), 0);
    setTotalCO2Reduction(totalReduction);
  }, [actions]);

  const clearActions = () => {
    setActions([]);
    setTotalCO2Reduction(0);
  };

  const removeAction = (name) => {
    setActions((prevActions) => prevActions.filter(action => action.name !== name));
  };

  const positiveActions = actions.filter(action => action.type === "positive");
  const negativeActions = actions.filter(action => action.type === "negative");

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Eco Tracker</h1>

      <div className="actions-container">
        <div className="positive-actions">
          <h2>Positive Actions</h2>
          <ActionList actions={positiveActions} addAction={addAction} />
        </div>  
        
        <div className="negative-actions">
          <h2>Negative Actions</h2>
          <ActionList actions={negativeActions} addAction={addAction} />
        </div>
      </div>

      <ImpactSummary
        actions={actions}
        totalCO2Reduction={totalCO2Reduction}
        clearActions={clearActions}
        removeAction={removeAction}
      />
    </div>
  );
}

export default EcoTracker;
