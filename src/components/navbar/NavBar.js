import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./navbar.css";

// <div className="item"><Link to='/interests'>Other Interests</Link></div>

const NavBar = () => {
  return (
    <div className='navBar'>
      <Menu fixed='top' widths={6}>
        <Menu.Item className='menu-item' as={Link} to='/'>
          About Me
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/projects'>
          Projects
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/mini-projects'>
          Mini Projects
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/experience'>
          Experience
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/blog'>
          Blog
        </Menu.Item>
        <Menu.Item className='menu-item' as={Link} to='/contact'>
          Contact
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
