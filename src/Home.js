// Home.js
import React from 'react';
import './styles.css';

function Home() {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner">
        <h1>Eco Footprint!</h1>
        <p>Saving our planet together</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Vehicle Emissions</h3>
            <p>Calculate the carbon footprint of different types of vehicles, from cars to motorcycles.</p>
          </div>
          <div className="feature-item">
            <h3>Flight Emissions</h3>
            <p>Estimate the carbon emissions from your flights, whether they're domestic or international.</p>
          </div>
          <div className="feature-item">
            <h3>Save your Journeys</h3>
            <p>Save your journeys to local storage. A good place to review your contribution to a carbon-free environment.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
