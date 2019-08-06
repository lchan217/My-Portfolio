import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar">
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/about'>About Me</Link></div>
      <div><Link to='/projects'>Projects</Link></div>
      <div><Link to='/resume'>Resume</Link></div>
      <div><Link to='/interests'>Other Interests</Link></div>
      <div><Link to='/contact'>Contact</Link></div>
    </div>
  );
};

export default NavBar;
