import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

import Logo from '../../images/logo-tope-mini.svg';

const Menu: FunctionComponent = () => (
  <nav>
    <div id='cont'>
      <NavLink to='/' title='Home'>
        <img src={Logo} alt='Logo T.O.P.E.' />
      </NavLink>
      <ul>
        <li key='black_friday' className='menu_option'>
          <NavLink activeClassName='active_option' to='/bfriday'>
            BLACK FRIDAY
          </NavLink>
        </li>
        <li key='products' className='menu_option'>
          <NavLink activeClassName='active_option' to='/products'>
            PRODUTOS
          </NavLink>
        </li>
        <li key='signup' className='menu_option'>
          <NavLink activeClassName='active_option' to='/signup'>
            CADASTRO
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Menu;
