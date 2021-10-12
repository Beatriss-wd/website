import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className= 'navBar'>
      <ul>
        <li>
          <NavLink to="/" className= 'navBar'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className= 'navBar'>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className= 'navBar'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default NavBar;