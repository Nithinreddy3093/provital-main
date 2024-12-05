import React from "react";
import "./styles.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-grid">
        
        <div className="hero-content">
          <h1>
            Book an appointment with <br />
            <span className="highlight">lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases</p>
        </div>
        
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Condition, procedure, specialty..."
          />
          <input
            type="text"
            className="search-input"
            placeholder="City, state, or zipcode"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Insurance carrier"
          />
          <button className="search-button">Find now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
