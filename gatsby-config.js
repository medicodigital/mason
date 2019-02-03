const dotenv = require('dotenv')

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: 'The Mason Clinic',
    siteUrl: `https://www.masonclinic.co.uk`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-115080200-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '673796719642088',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
      },
    },
  ],
}
