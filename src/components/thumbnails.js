import React, { Component } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import * as indexStyles from '../styles/index.module.scss';

class Thumbnails extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <div className ={indexStyles.container}>
        {this.data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className ={indexStyles.item}>
            <div className = {indexStyles.image}>
              <Link to={node.fields.slug}>
                <GatsbyImage image={node.frontmatter.image.childImageSharp.gatsbyImageData} alt={node.frontmatter.alt} />
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
    );
  }
}

export default Thumbnails;
