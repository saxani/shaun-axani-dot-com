import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from '../components/seo';
import globalStyles from '../styles/global.module.scss';
import Thumbnails from '../components/thumbnails';

export default ({ data }) => {
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
    allMarkdownRemark (filter: {fileAbsolutePath: {regex: "\/experiments/"}},
      sort: { fields: [frontmatter___order]}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                 fluid(maxWidth: 400) {
                   ...GatsbyImageSharpFluid
                 }
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
