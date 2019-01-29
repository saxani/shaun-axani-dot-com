import React, { Component } from 'react';
import Image from "gatsby-image";
import { Link } from "gatsby";
import indexStyles from '../styles/index.module.scss';

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
    );
  }
}

export default Thumbnails;
