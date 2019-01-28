import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "gatsby-image";
import SEO from '../components/seo';
import globalStyles from '../styles/global.module.scss';
import indexStyles from '../styles/index.module.scss';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Experiments" />
      <div className ={globalStyles.section}>
        <h1>Some Experiments</h1>
        <div className ={indexStyles.container}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className ={indexStyles.item}>
              <div className = {indexStyles.image}>
                <Link to={node.fields.slug}>
                  <Image fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.alt} />
                  <h3 className={indexStyles.title}>
                    {node.frontmatter.title}{" "}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
