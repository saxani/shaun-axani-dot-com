import React from 'react';
import * as heroStyles from '../styles/hero.module.scss';
import TextAnimation from './text-animation';

const Hero = ({ siteTitle }) => (
  <div className ={heroStyles.container}>
    <TextAnimation />
    <div className ={heroStyles.caption}>
      Click & drag to interact
    </div>
  </div>
);

export default Hero;
