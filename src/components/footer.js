import React from 'react';
import globalStyles from '../styles/global.module.scss';
import footerStyles from '../styles/footer.module.scss';

const Footer = ({ siteTitle }) => (
  <div className= {footerStyles.outerFooter}>
    <div className={footerStyles.innerFooter}>
    All content © {new Date().getFullYear()},
    {` `}
    <a className ={globalStyles.menuLink} href="mailto:saxani@gmail.com">Shaun Axani</a>
    </div>
  </div>
);

export default Footer;
