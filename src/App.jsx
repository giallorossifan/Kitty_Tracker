import React from 'react';
import './App.css';
import leia_bear from '/src/images/leia_bear.png';
import Item from '/src/myitem';
import About from '/src/about';
import Family from '/src/family';
import AskMe from '/src/askMe';
import Navbar from '/src/navbar';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      < Home />

      <Routes>
        {/* <Route path="/" element={< Home />} /> */}
        <Route path="/myitem" element={< Item />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className = "leiaAppContainer" >
      <div className="aboutleiaContainer">
        <About />
        <Family />
      </div>

      <div className="mainImage">
        <span href="" target="">
          <img src={leia_bear} className="logo" alt="Leia Bear Logo" />
        </span>
      </div>

      <div className="leiaIntro">
        <h1> Hi Im Leia Bear </h1>
      </div>

      <div className="aboutleiaContainer">
        <AskMe />
        <Link to="/myitem">
          <button className = "leiaIntro">
            <h1> Pictures </h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
