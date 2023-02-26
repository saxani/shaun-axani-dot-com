module.exports = {
  pathPrefix: `/fonts`,
  siteMetadata: {
    title: `Shaun Axani`,
    description: `Shaun Axani's portfolio site`,
    author: `Shaun Axani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/experiments/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sa.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Shaun Axani Portfolio",
        short_name: "Shaun Axani",
        start_url: "/",
        background_color: "#c471ed",
        theme_color: "#c471ed",
        display: "standalone",
        icon: "src/images/sa.png", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
  ],
}
