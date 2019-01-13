import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

const NewsWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  margin: 0;
  width: 100%;
`

const NewsContainer = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
`

const StickyHolder = styled.div`
  background: #86aecf;
  color: #fff;
  order: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  @media (min-width: 600px) {
    order: 1;
  }
`

const BlogHeader = styled.h3`
  margin-top: 3rem;
`

const BlogPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>
        <BlogHeader>{node.headline}</BlogHeader>
        <div
          dangerouslySetInnerHTML={{
            __html: node.copy.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </li>
  )
}

const NewsPage = ({ data }) => (
  <Layout>
    <NewsWrapper>
      <TherapyHeader therapy="Blog" />
      <NewsContainer>
        <ul>
          {data.allContentfulBlog.edges.map(edge => (
            <BlogPost node={edge.node} />
          ))}
        </ul>
      </NewsContainer>
    </NewsWrapper>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query pageQuery{
    allContentfulBlog (filter: {
      node_locale: {eq:"en-US"}
    }) {
      edges {
        node {
          headline
          slug
          copy {
            childMarkdownRemark {
                excerpt
              }
        }
        }
      }
    }
  }
`
