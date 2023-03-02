import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import SEO from '../components/seo';
import Skills from '../components/skills';
import * as globalStyles from '../styles/global.module.scss';
import * as aboutStyles from '../styles/about.module.scss';

const About = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <div className ={globalStyles.section}>
      <h1>About</h1>

      <div className={aboutStyles.content}>

        <div className={aboutStyles.right}>
          <Skills />
        </div>

          <div className= {aboutStyles.imgWrapper} style={{marginBottom: '30px'}}>
            <GatsbyImage image = {data.file.childImageSharp.gatsbyImageData} alt="Photo of Shaun Axani" />
          </div>
          <p>
            I did my undergrad in media production in Toronto, Canada, and I sought to become an expert with both audio and video technology. After graduating, I produced everything from corporate videos to live music content and was also a failed rock star, briefly touring Canada in a marginally successful band.
          </p>
          <p>
            I left my homeland for <a href='https://tisch.nyu.edu/itp' target='_blank' rel="noreferrer">ITP at NYU Tisch</a> in 2014, with the goal of taking my traditional media background and putting an interactive twist on it through code and emerging technology. What I discovered was endless options and inspiration, and I continue to grow with each new job, project, and experiment. ITP demystified technology for me, and I’ve been keen to harness its potential in new and exciting ways ever since. Whether it’s code, hardware design, sensors, virtual reality, 3D printing, fabrication, machine learning, big data or more, I no longer feel intimidated by a new challenge. 
          </p>
          <p>
            My work at ITP and in the year following graduation focused on telling stories. But I extended it beyond screens; I wanted to create non-linear interactivity through mobile phones, tablets, VR headsets, physical space, sensors, or any combination of them all.
          </p>
          <p>
            I was fortunate and had some success with a mixed-media escape room experience ‘Quinn’, which premiered at Tribeca Film Festival, and was nominated for the prestigious <a href='https://futureofstorytelling.org/' target='_blank' rel="noreferrer">Future of Storytelling Prize</a> alongside companies like NASA and BBC. The room was set up in many different locations in 2016, and hundreds of people were able to participate. That work led to being able to create an immersive theatre experience off-Broadway about climate change (Refuge), which utilized (seemingly) unlimited Arduino and Raspberry Pi’s to make numerous magical interactions for the guests.
          </p>
          <p>
            Seeking to improve my coding skillset, I relocated to San Francisco to work at Apple as a frontend developer working full time on apple.com as a contractor through <a href='https://wearekettle.com/' target='_blank' rel="noreferrer">Kettle</a>. Working within the Apple campus, I learned a lot about making efficient, robust code and refined my ability to collaborate on a project and properly deploy it. After a couple of years of immense learning, I craved the prototyping, iterative design process of ITP. I was fortunate enough to be the first employee at a lab created by <a href="https://ideo.com/" target="_blank" rel="noreferrer">IDEO</a> for <a href="https://www.orbia.com/" target="_blank" rel="noreferrer">Orbia</a>, a global infrastructure company that has a purpose-driven mandate. My days were spent prototyping web and sensor-based apps, researching emerging technology, doing us- er-centered design with consumers, and preparing polished pitches to motivate the company to invest in projects that are “good for business and good for the world.”
          </p>
          <p>
            Throughout my journey, I’ve tried to teach whenever possible, as I think it’s important that students of all ages grow their technological literacy. I’ve taught various coding classes at NYU, Toronto Metropolitan University, Fashion Institute of Technology, and the City University of New York. 
          </p>
          
          <div className={aboutStyles.skillsSmall}>
            <Skills />
          </div>
  
      </div>
      <div className={globalStyles.spacer}></div>
    </div>
  </Layout>
)

export default About;

export const query = graphql`
  query {
    file(relativePath: { eq: "shaun.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 470) 
      }
    }
  }
`
