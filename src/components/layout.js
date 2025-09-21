import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import * as globalStyles from '../styles/global.module.scss';
import Header from './header';
import Footer from './footer';


export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <>
        <div className={globalStyles.wrapper}>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <div className={globalStyles.push}></div>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
  );
}

// const Layout = ({ children }) => (
//  useStaticQuery(graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `)
//     render={data => (
//       <>
//         <div className={globalStyles.wrapper}>
//           <Header siteTitle={data.site.siteMetadata.title} />
//           {children}
//           <div className={globalStyles.push}></div>
//         </div>
//         <Footer siteTitle={data.site.siteMetadata.title} />
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// export default Layout;
