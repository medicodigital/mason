const dotenv = require('dotenv')

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: 'The Mason Clinic',
    description: `The Mason Clinic, osteopathy and complementary therapy in Medway, Kent`,
    siteUrl: `http://www.masonclinic.co.uk`,
    author: `Mason Clinic`,
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PK28HJF",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
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
        spaceId: '637dlrus9xh9',
        accessToken: '2692befecf49eb85432fb4f158c51f9af08caf60faae2955623d15142032cfa2',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Mason Clinic`,
        short_name: `Mason Clinic`,
        start_url: `/`,
        background_color: `#4189c8`,
        theme_color: `#4189c8`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
