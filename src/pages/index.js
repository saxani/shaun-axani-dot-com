import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import globalStyles from '../styles/global.module.scss';
import SEO from '../components/seo';
import Thumbnails from '../components/thumbnails'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Creative Technologist" />
      <Hero />
      <div className ={globalStyles.section}>
        <Thumbnails data = { data } />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (sort: { fields: [frontmatter___order]},
      filter: {fileAbsolutePath: {regex: "\/pages/"}}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
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
