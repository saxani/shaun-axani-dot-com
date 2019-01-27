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

      <div className= {aboutStyles.imgWrapper}>
        <Image fluid= {data.file.childImageSharp.fluid} alt="Photo of Shaun Axani" />
      </div>

      <p>
        Growing up in and around Toronto, Canada, Shaun came to New York City to pursue a master's degree at the renowned ITP at NYU. He combines his media and story roots with physical computing, mobile development, augmented reality and code to tell new media stories in innovative and exciting ways.
      </p>
      <p>
        Shaun has been an adjunct professor at NYU, FIT, and CUNY, teaching students to code in Python, HTML/CSS/Javascript, and Processing, and has recently relocated to San Francisco to learn best-in-class development techniques on site at Apple.
      </p>
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
