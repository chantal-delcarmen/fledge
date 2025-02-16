import React, { useState } from 'react';
import './Selection.css';  // Assuming the styles are in this file

function Selection() {
  // Manage all toggle states in a single object
  const [toggles, setToggles] = useState({
    finance: false,
    career: false,
    relationships: false,
    automotive: false,
    health: false,
  });

  // Toggle function
  const handleToggle = (category) => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      [category]: !prevToggles[category],
    }));
  };

  return (
    <div className="selection-page">
      <h2>Set notification preferences (for the types of fledges you want)</h2>
      <div className="buttons">
        {Object.keys(toggles).map((category) => (
          <button
            key={category}
            className={toggles[category] ? 'button-on' : 'button-off'}
            onClick={() => handleToggle(category)}
          >
            {toggles[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
        <p>Ready?</p>
        <button className="next-button">Next</button>
      </div>
    </div>
  );
}

export default Selection;



