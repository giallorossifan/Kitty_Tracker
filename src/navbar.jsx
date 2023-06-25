import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
=======
import './index.css';
import { NavLink } from 'react-router-dom';

>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438

class Navbar extends React.Component {

constructor(props){
  super(props)

}

  render(){
    return (

<<<<<<< HEAD
  <div class="navbar-container">
    <ul class= "nav nav-fill">
      < li class= "nav-item">
       <NavLink to="/">
          < a class="nav-text nav-link active" aria-current="page"> Home </a>
        </NavLink>
      </li>
      < li class= "nav-item">
        < a class="nav-text nav-link active" aria-current="page" href="#"> How it works </a>
      </li>
      < li class= "nav-item">
        < a class="nav-text nav-link active" aria-current="page" href="#"> button1 </a>
=======
  <div className="navbar-container">
    <ul className= "nav nav-fill">
      {/* < li className= "nav-item">
       <NavLink to="/">
          < span className="nav-text nav-link active" aria-current="page"> Home </span>
        </NavLink>
      </li> */}
      < li className= "nav-item">
        < a className="nav-text nav-link active" aria-current="page" href="#"> How it works </a>
      </li>
      < li className= "nav-item">
        < a className="nav-text nav-link active" aria-current="page" href="#"> button1 </a>
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
      </li>
    </ul>




  </div>

      )
  }
}


export default Navbar;
