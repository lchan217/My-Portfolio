import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./navbar.css";

// <div className="item"><Link to='/interests'>Other Interests</Link></div>

const NavBar = () => {
  return (
    <div className='navBar'>
      <Menu fixed='top' widths={6}>
        <Menu.Item>
          {" "}
          <Link className='link' to='/'>
            About Me
          </Link>
        </Menu.Item>
        <Menu.Item>
          {" "}
          <Link className='link' to='/projects'>
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item>
          {" "}
          <Link className='link' to='/mini-projects'>
            Mini Projects
          </Link>
        </Menu.Item>
        <Menu.Item>
          {" "}
          <Link className='link' to='/experience'>
            Experience
          </Link>
        </Menu.Item>
        <Menu.Item>
          {" "}
          <Link className='link' to='/blog'>
            Blog
          </Link>
        </Menu.Item>
        <Menu.Item>
          {" "}
          <Link className='link' to='/contact'>
            Contact
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
