import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <ul>
        <li><a href="/">Naslovna stranica</a></li>
        <li><a href="news">Novosti</a></li>
        <li><a href="contact">Kontakt</a></li>
        <li><a href="about_us">O nama</a></li>
      </ul>
    );
  }
}

export default Header;
