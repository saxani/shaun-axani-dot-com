import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import * as globalStyles from "../styles/global.module.scss";
import * as itemStyles from "../styles/item.module.scss";

const PortfolioItem = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div className={globalStyles.section}>
         <h1 className={itemStyles.headline}>{post.frontmatter.title}</h1>
         <div className={itemStyles.grid}>
           <div className={itemStyles.gridItem}>
             <GatsbyImage image={post.frontmatter.image.childImageSharp.gatsbyImageData} alt={post.frontmatter.alt} />
           </div>
           <div className={itemStyles.gridItem}>
            <p><span className={itemStyles.title}>Role:</span> {post.frontmatter.role}</p>
            <p><span className={itemStyles.title}>Tasks:</span> {post.frontmatter.tasks}</p>
            <p><span className={itemStyles.title}>Technology:</span> {post.frontmatter.technology}</p>
           </div>
         </div>
         <div className ={itemStyles.contentWrapper}>
           <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
            gatsbyImageData(width: 1000) 
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

export default PortfolioItem;