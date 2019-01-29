import React from 'react';
import globalStyles from '../styles/global.module.scss';
import footerStyles from '../styles/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ siteTitle }) => (
  <div className= {footerStyles.outerFooter}>
    <div className={footerStyles.innerFooter}>
    All content © {new Date().getFullYear()},
    {` `}
    <a className ={globalStyles.menuLink} href="mailto:saxani@gmail.com">Shaun Axani</a>
    <a className ={footerStyles.github} href="https://github.com/saxani/shaun-axani-dot-com">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    </div>
  </div>
);

export default Footer;
