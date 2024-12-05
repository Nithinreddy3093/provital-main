import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Hero/>
      </Router>
    </div>
  );
}

export default App;
