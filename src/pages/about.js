import React from 'react';
import Image from "gatsby-image";

import Layout from '../components/layout';
import SEO from '../components/seo';
import globalStyles from '../styles/global.module.scss';
import aboutStyles from '../styles/about.module.scss';

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className ={globalStyles.section}>
      <h1>About</h1>

      <div class={aboutStyles.grid}>
        <div class={aboutStyles.gridItem}>
          <p>
            Growing up in and around Toronto, Canada, Shaun came to New York City to pursue a master's degree at the renowned ITP at NYU. He combines his media and story roots with physical computing, mobile development, augmented reality and code to tell new media stories in innovative and exciting ways.
          </p>
          <p>
            Shaun has been an adjunct professor at NYU, FIT, and CUNY, teaching students to code in Python, HTML/CSS/Javascript, and Processing, and has recently relocated to San Francisco to learn best-in-class development techniques on site at Apple.
          </p>
          <div className= {aboutStyles.imgWrapper}>
            <Image fluid= {data.file.childImageSharp.fluid} alt="Photo of Shaun Axani" />
          </div>
        </div>
        <div class={[aboutStyles.gridItemSmall, aboutStyles.resumeText].join(' ')}>
          <p>WORK EXPERIENCE</p>
          <p>Kettle | Front-End Developer<span class={aboutStyles.subText}>Aug. 2017 – Present</span></p>
          <p>NYU, FIT & CUNY | Adjunct Professor <span class={aboutStyles.subText}>Aug. 2016 – May 2017</span></p>
          <p><a href="http://storyplex.io">Storyplex</a> | Founder <span class={aboutStyles.subText}>June 2016 – Present</span></p>
          <p>Interlude/Eko | Creative Intern <span class={aboutStyles.subText}>July 2015 - Sept. 2015</span></p>
          <p>Ryerson University | RTA School of Media | Production Staff & Technical Instructor <span class={aboutStyles.subText}>Aug. 2009 - Aug. 2014</span></p>
          <p>EDUCATION</p>
          <p>New York University – Masters of Practical Studies (Major – Interactive Telecommunications)<span class={aboutStyles.subText}>2014 - 2016</span></p>
          <p>Ryerson University - Bachelor of Applied Arts (Major - Radio and Television)<span class={aboutStyles.subText}>2003 - 2007</span></p>
        </div>
        <div class={[aboutStyles.gridItemSmallest, aboutStyles.resumeText].join(' ')}>
          <p>PROGRAMMING</p>
          <p>
            HTML/CSS/JavaScript <br />
            Python <br />
            Processing <br />
            React <br />
            GraphQL <br />
            Sass <br />
            Handlebars <br />
            Three.js <br />
          Node.js <br />
          </p>
          <p>SOFTWARE</p>
          <p>
            Adobe Premiere <br />
            Adobe After Effects <br />
            Adobe Photoshop <br />
            Pro Tools <br />
            Ableton <br />
            Autopano <br />
            Eagle <br />
            Vectorworks <br />
          </p>
          <p>HARDWARE</p>
          <p>
            Arduino <br />
            Raspberry Pi <br />
            Video equipment <br />
            Audio recording gear <br />
            Laser cutter <br />
            CNC Routers <br />
          </p>
        </div>
      </div>
      <div className={globalStyles.spacer}></div>
    </div>
  </Layout>
)

export default About;

export const query = graphql`
  query {
    file(relativePath: { eq: "ShaunAxani.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
