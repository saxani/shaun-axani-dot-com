import React from 'react'
import * as aboutStyles from '../styles/about.module.scss';

const Skills = () => (
  <div className={aboutStyles.skillsWrapper}>
    <div class={[aboutStyles.gridItemSmall, aboutStyles.resumeText].join(' ')}>
      <p>WORK EXPERIENCE</p>
      <p>IDEO / Orbia | Software Developer<span class={aboutStyles.subText}>Fall 2019 – Summer 2022</span></p>
      <p>Kettle / Apple | Front-End Developer<span class={aboutStyles.subText}>Summer 2017 – Summer 2019</span></p>
      <p>NYU, TMU, FIT & CUNY | Adjunct Professor <span class={aboutStyles.subText}>Fall 2016 – Spring 2022</span></p>
      <p><a href="http://storyplex.io">Storyplex</a> | Founder <span class={aboutStyles.subText}>Spring 2016 – Present</span></p>
      <p>Interlude/Eko | Creative Intern <span class={aboutStyles.subText}>Summer 2015</span></p>
      <p>Toronto Metropolitan University | RTA School of Media | Production Staff & Technical Instructor <span class={aboutStyles.subText}>2009 - 2014</span></p>
      <p>EDUCATION</p>
      <p>New York University – Masters of Practical Studies (Major – Interactive Telecommunications)<span class={aboutStyles.subText}>2014 - 2016</span></p>
      <p>Ryerson University - Bachelor of Applied Arts (Major - Radio and Television)<span class={aboutStyles.subText}>2003 - 2007</span></p>
      <p>Microsoft Certifications - Azure Fundamentals <span class={aboutStyles.subText}>2020</span></p>
    </div>
    <div class={[aboutStyles.gridItemSmallest, aboutStyles.resumeText].join(' ')}>
      <p>PROGRAMMING</p>
      <p>
        HTML/CSS/JavaScript <br />
        MERN + GraphQL stack (MongoDB, Express, React, Node)
        Python <br />
        Processing (Java)<br />
        Arduino IDE (C++)<br />
        React Native <br />
        Phonegap <br />
        Sass <br />
        Handlebars <br />
        Three.js <br />
        AWS <br />
        Azure <br />
        Firebase <br />
      </p>
      <p>SOFTWARE</p>
      <p>
        Adobe Premiere <br />
        Adobe After Effects <br />
        Adobe Photoshop <br />
        Figma <br />
        Framer <br />
        Pro Tools <br />
        Ableton <br />
        Autopano <br />
        Unity <br />
        Eagle <br />
        Vectorworks <br />
        Sketchup <br />
        Easel <br />
        Lightburn <br />
      </p>
      <p>HARDWARE</p>
      <p>
        Arduino <br />
        Raspberry Pi <br />
        Numerous sensors <br />
        Video equipment <br />
        Audio recording gear <br />
        Laser cutter <br />
        CNC Routers <br />
      </p>
    </div>
  </div>
);

export default Skills;
