import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <ul>
        <li><a href="#Naslovna stranica">Naslovna stranica </a></li>
        <li><a href="#Novosti"> Novosti </a></li>
        <li><a href="#Kontakt"> Kontakt </a></li>
        <li><a href="#O nama"> O nama</a></li>
      </ul>
    );
  }
}

export default Header;
