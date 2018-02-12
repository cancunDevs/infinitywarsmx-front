import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable arrow-body-style */
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/' href>Inicio</Link></li>
        <li><Link to='/rules' href>Reglas</Link></li>
      </ul>
    </nav>
  </header>
);
/* eslint-enable arrow-body-style */

export default Header;
