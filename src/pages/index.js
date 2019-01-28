import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Image from "gatsby-image";
import globalStyles from '../styles/global.module.scss';
import indexStyles from '../styles/index.module.scss';
import SEO from '../components/seo';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Creative Technologist" />
      <Hero />
      <div className ={globalStyles.section}>
        <div className ={indexStyles.container}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className ={indexStyles.item}>
              <div className = {indexStyles.image}>
                <Link to={node.fields.slug}>
                  <Image fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.alt} />
                  <div className={indexStyles.info}>
                    <h3 className={indexStyles.title}>
                      {node.frontmatter.title}{" "}
                    </h3>
                    <p className={indexStyles.category}>{node.frontmatter.category}</p>
                  </div>
                  <div className ={indexStyles.overlay}></div>
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
