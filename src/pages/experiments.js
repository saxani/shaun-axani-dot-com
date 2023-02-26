import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from '../components/seo';
import * as globalStyles from '../styles/global.module.scss';
import Thumbnails from '../components/thumbnails';

const Experiments = ({ data }) => {
  return (
    <Layout>
      <SEO title="Experiments" />
      <div className ={globalStyles.section}>
        <h1>Some Experiments</h1>
        <Thumbnails data = { data } />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: {frontmatter: {order: ASC}}
      filter: {fileAbsolutePath: {regex: "/experiments/"}}
    ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            alt
            image {
              childImageSharp {
                 gatsbyImageData(width: 480) 
               }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Experiments;