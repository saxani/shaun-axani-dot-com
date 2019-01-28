import React from 'react';
import heroStyles from '../styles/hero.module.scss';
import TextAnimation from './text-animation';

const Hero = ({ siteTitle }) => (
  <div className ={heroStyles.container}>
    <TextAnimation />
  </div>
);

export default Hero;
