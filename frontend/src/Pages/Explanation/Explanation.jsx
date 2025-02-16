// Explanation.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Explanation() {
  const navigate = useNavigate();

  return (
    <div className="explanation-page">
      <h2>How it works!</h2>
      <p>Growing up is hard. We're here to smooth out the turbulence. Fledge provides you with key prompts ("fledges") to help you leave the nest and fly on your own. With simple text or email messages, we bring your attention to adulting tasks vital to staying aloft... How's your link filter?</p>
      <button onClick={() => navigate('/selection')}>Let's go!</button>
    </div>
  );
}

export default Explanation;

