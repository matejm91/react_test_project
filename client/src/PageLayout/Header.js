import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Button variant="contained" color="secondary" href="/">
            Naslovna stranica
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" href="news">
            Nanovo Rođeni
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" href="contact">
            Kontakt
          </Button>
        </li>
        <li>
          <Button variant="contained" color="secondary" href="about_us">
            Župa
          </Button>
        </li>
      </ul>
    );
  }
}

export default Header;
