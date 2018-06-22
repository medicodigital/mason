import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "complementary healthcare in Medway, Kent" },
        { name: "description", content: "osteopathy, acupuncture, chiropody, podiatry, homeopathy, reflexology, massage, back pain in Medway, Kent" },
      ]}
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
