import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import * as globalStyles from '../styles/global.module.scss';


const Contact = ({ data }) => (
  <Layout>
    <div className={globalStyles.section}>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <p>Contact, me, Shaun, and we can chat:</p>
      <p>347-596-1540 <br />
        <a href="mailto:saxani@gmail.com">saxani@gmail.com</a>
      </p>

    </div>
  </Layout>
)

export default Contact;
