import React from 'react';
import './Header.css';
import logo from '../../todoist.png';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="menu-icon">
        </div>
        <div className="title">
          To-Doist
        </div>
        <div className="logo">
        </div>
      </div>
    )
  }
}

export default Header;
