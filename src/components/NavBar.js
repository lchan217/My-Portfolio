import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBar">
      <div class="ui five item menu">
        <div className="item"><Link to='/about'>About Me</Link></div>
        <div className="item"><Link to='/projects'>Projects</Link></div>
        <div className="item"><Link to='/experience'>Experience</Link></div>
        <div className="item"><Link to='/interests'>Other Interests</Link></div>
        <div className="item"><Link to='/contact'>Contact</Link></div>
      </div>
    </div>
  );
};

export default NavBar;
