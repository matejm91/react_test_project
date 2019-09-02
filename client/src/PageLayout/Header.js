import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Button variant="contained" color="secondary">
            <Link to="/">
              Naslovnica
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">
            <Link to="about_us">
              Župa
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">
            <Link to="news">
              Nanovo Rođeni
            </Link>
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary">
            <Link to="contact">
              Kontakt
            </Link>
          </Button>
        </li>
      </ul>
    );
  }
}

export default Header;
