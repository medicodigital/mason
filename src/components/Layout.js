import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'
import '../layouts/index.css'

export default ({ children }) => (
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
      <div>
        <div
          style={{
            margin: '0 auto',
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
)
