import React from "react";
import { Link } from "react-router-dom";

// <div className="item"><Link to='/interests'>Other Interests</Link></div>

const NavBar = () => {
  return (
    <div className='navBar'>
      {/* <div className='ui fixed six item menu'> */}
      <div className='ui fixed five item menu'>
        <div className='item'>
          <Link to='/'>About Me</Link>
        </div>
        <div className='item'>
          <Link to='/projects'>Projects</Link>
        </div>
        {/* <div className='item'>
          <Link to='/mini-projects'>Mini Projects</Link>
        </div> */}
        <div className='item'>
          <Link to='/experience'>Other Experience</Link>
        </div>
        <div className='item'>
          <Link to='/blog'>Blog</Link>
        </div>
        <div className='item'>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
