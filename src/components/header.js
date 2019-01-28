import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import globalStyles from '../styles/global.module.scss';
import headerStyles from '../styles/header.module.scss';

const ListLink = props => (
  <li className = {props.class}>
    <Link className = {globalStyles.menuLink} to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div className ={headerStyles.container}>
    <div className ={headerStyles.textWrapper}>
      <h1 className= {globalStyles.visuallyHidden}>
        {siteTitle}
      </h1>
      <ul className = {headerStyles.navBar}>
        <ListLink class= {headerStyles.leftSide} to="/">Shaun Axani</ListLink>
        <ListLink class= {headerStyles.rightSide} to="/about/">About</ListLink>
        <ListLink class= {headerStyles.rightSide} to="/experiments">Experiments</ListLink>
        <ListLink class= {headerStyles.rightSide} to="/contact/">Contact</ListLink>
     </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header