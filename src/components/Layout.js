import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Footer from '../components/Footer'
import '../layouts/index.css'
import icon32 from '../images/favicon.png'

// const Layout = ({ children, data }) => (
//   <div>

//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }

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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'The Mason Clinic, osteopathy and complementary healthcare in Chatham, Medway, Kent',
            },
            {
              name: 'keywords',
              content:
                'osteopathy, cranial osteopathy, acupuncture, chiropody, podiatry, homeopathy, reflexology, massage, back pain, complementary healthcare, Chatham, Medway, Kent',
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
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
