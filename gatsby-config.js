module.exports = {
  siteMetadata: {
    title: `Resume`,
  },
  pathPrefix: `/website`,
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
