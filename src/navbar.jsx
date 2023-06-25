import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {

constructor(props){
  super(props)

}

  render(){
    return (

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
      </li>
    </ul>




  </div>

      )
  }
}


export default Navbar;
