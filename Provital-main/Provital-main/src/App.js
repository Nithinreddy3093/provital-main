import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import How from './components/howitworks';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Hero/>
        <How/>
      </Router>
    </div>
  );
}

export default App;
