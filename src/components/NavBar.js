import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <nav className='navbar'>
        <NavLink activeClassName='navbar__link-active' className='navbar__link' to='/champion-select'>CHAMPION VIEWER</NavLink>
    </nav>
);

export default NavBar;
