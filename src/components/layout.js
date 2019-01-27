import React from 'react'
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import globalStyles from '../styles/global.module.scss';
import Header from './header';
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className={globalStyles.wrapper}>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <div className={globalStyles.push}></div>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
