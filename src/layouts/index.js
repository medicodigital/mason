import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import './index.css'
import icon32 from '../images/favicon.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'The Mason Clinic, complementary healthcare in Medway, Kent',
        },
        {
          name: 'keywords',
          content:
            'osteopathy, acupuncture, chiropody, podiatry, homeopathy, reflexology, massage, back pain complementary healthcare in Medway, Kent',
        },
      ]}
      link={[
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: `${icon32}`,
        },
      ]}
      htmllang="en"
    />
    <div
      style={{
        margin: '0 auto',
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
