import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

/* eslint-disable arrow-body-style */
const Header = () => (
  <header className='header'>
    <nav className='navbar navbar-expand-lg'>
      <Link to='/' className='navbar-brand' href>InfinityWarsMX</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <i className='material-icons'>more_vert</i>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/' href className='nav-link'>Home <span className='sr-only'>(current)</span></Link>
          </li>
          <li className='nav-item'>
            <Link to='/rules' href className='nav-link'>Reglas</Link>
          </li>
          <li className='nav-item'>
            <Link to='/leaders' href className='nav-link'>Coliderato</Link>
          </li>
          <li className='nav-item'>
            <Link to='/penalties' href className='nav-link'>Penalizaciones</Link>
          </li>
          <li className='nav-item'>
            <Link to='/tournaments' href className='nav-link'>Torneos</Link>
          </li>
          <li className='nav-item'>
            <Link to='/announcements' href className='nav-link'>Anuncios</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
/* eslint-enable arrow-body-style */

export default Header;
