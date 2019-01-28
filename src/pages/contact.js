import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import globalStyles from '../styles/global.module.scss';

const SecondPage = () => (
  <Layout>
    <div className={globalStyles.section}>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>Contact Shaun:</p>
      <p>347-596-1540</p>
      <a href="mailto:saxani@gmail.com">saxani@gmail.com</a>
    </div>
  </Layout>
)

export default SecondPage