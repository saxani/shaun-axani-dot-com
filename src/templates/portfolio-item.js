import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "gatsby-image";
import globalStyles from "../styles/global.module.scss";
import itemStyles from "../styles/item.module.scss";

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className={globalStyles.section}>
         <h1>{post.frontmatter.title}</h1>
         <Image fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.alt} />
         <div dangerouslySetInnerHTML={{ __html: post.html }} />
         <div>
          <p><span className={itemStyles.title}>Role:</span> {post.frontmatter.role}</p>
          <p><span className={itemStyles.title}>Tasks:</span> {post.frontmatter.tasks}</p>
          <p><span className={itemStyles.title}>Technology:</span> {post.frontmatter.technology}</p>
         </div>
       </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
       title
       date
       order
       image {
         childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
       }
       alt
       role
       tasks
       technology
     }
   }
  }
`
