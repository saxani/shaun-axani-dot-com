import { Link } from 'gatsby';
import React from 'react';
import * as headerStyles from '../styles/header.module.scss';
import { stack as Menu } from 'react-burger-menu';


const Burger = () => (
  <div className ={headerStyles.burgerWrapper}>
    <Menu>
      <Link className = 'menu-item' to="/about/">About</Link>
      <Link className = 'menu-item' to="/experiments">Experiments</Link>
      <Link className = 'menu-item' to="/contact/">Contact</Link>
    </Menu>
  </div>
);


export default Burger;
