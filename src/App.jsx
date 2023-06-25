<<<<<<< HEAD
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import leia_bear from '/src/leia_bear.png';
import Item from '/src/myitem';
// import Starwars from '/src/starwars';
=======
import React from 'react';
import './App.css';
import leia_bear from '/src/images/leia_bear.png';
import Item from '/src/myitem';
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
import About from '/src/about';
import Family from '/src/family';
import AskMe from '/src/askMe';
import Navbar from '/src/navbar';

<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';


import React from 'react';



function App() {
  // const [count, setCount] = useState(0)

  return (

    <Router>

          <Navbar />


    <Route path="/" exact>
        <div className="aboutleiaContainer">
          <About />
          <Family />
        </div>

      <div className="mainImage">
        <a href="" target="">
          <img src={leia_bear} className="logo" alt="Vite logo" />
        </a>
      </div>

      <div class="leiaIntro">
      <h1> Hi I'm Leia Bear </h1>
      </div>


        <div className="aboutleiaContainer">
        <AskMe />

        <Link to="/myitem">
        <button>
          <h1> Pictures </h1>
        </button>
        </Link>

        </div>
    </Route>



        <Route path= "/myitem">
          <Item />
        </Route>




    </Router>
  )
=======
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
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
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
