// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Wheel from './Wheel';
import Explanation from './Explanation';
import Selection from './Selection';
import './App.css';

function App() {

  return (
    <Router>
      <div>
      <h1>Fledge</h1>
      <p>Take flight and leave the nest</p>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wheel" element={<Wheel />} />
          <Route path="/explanation" element={<Explanation />} />
          <Route path="/selection" element={<Selection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
