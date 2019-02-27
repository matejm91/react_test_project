import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    );
  }
}

export default Header;
