import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import * as globalStyles from '../styles/global.module.scss';
import SEO from '../components/seo';
import Thumbnails from '../components/thumbnails';

const Index = ({ data }) => {
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
    allMarkdownRemark (
      sort: {frontmatter: {order: ASC}}
      filter: {fileAbsolutePath: {regex: "/pages/projects/"}}
    ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
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

export default Index;