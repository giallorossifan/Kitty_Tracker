import React from 'react';
import './App.css';
import leia_bear from '/src/images/leia_bear.png';
import Item from '/src/myitem';
import About from '/src/about';
import Family from '/src/family';
import AskMe from '/src/askMe';
import Navbar from '/src/navbar';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MyItem from './myitem';

function App() {
  return (

    <Router>
      <div className="scrollable-content">
      <div className="app-container">
      <Navbar />


      < Home />


      <Routes>
        <Route path="/myitem" element={< Item />} />

      </Routes>

      </div>
      </div>
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
       {/*  <AskMe />
        <MyItem /> */}
      </div>
    </div>
  );
}

export default App;
