import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

const NewsWrapper = styled.div`
  background: #ddeaf6;
  min-height: 90vh;
  padding-bottom: 10vh;
  width: 100%;
`

const NewsContainer = styled.main`
  min-height: 100%;
  max-width: 70vw;
  margin: 0 auto;
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
  color: #161616;
  margin: 0;
`

const BlogPostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 425px;
  grid-gap: 20px;
  justify-content: center;
  margin-top: 10vh;
  padding: 0;
`

const BlogPostHolder = styled.li`
  background: #fefefe;
  border: 1px solid #3c3c3c;
  border-radius: 5px;
  overflow: hidden;
  transition: 1s all;
  :hover {
    box-shadow: 2px 2px 4px hsla(0, 0%, 30%, 0.7),
      6px 6px 8px hsla(0, 0%, 50%, 0.2);
  }
`

const BlogImage = styled(Img)`
  position: relative;
  top: 0;
  left: 0;
  height: 45%;
  object-fit: cover;
  width: 100%;
`

const BlogCopyHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 45%;
  justify-content: space-between;
  padding: 20px;
`

const BlogExcerpt = styled.div`
  color: #3c3c3c;
`

const ReadMore = styled.h6`
  color: #3c3c3c;
  font-weight: 900;
  margin: 0;
`

const BlogPost = ({ node }) => {
  return (
    <BlogPostHolder>
      <Link to={node.slug}>
        <BlogImage fluid={node.image.fluid} alt={node.image.description} />
        <BlogCopyHolder>
          <BlogHeader>{node.headline}</BlogHeader>
          <BlogExcerpt
            dangerouslySetInnerHTML={{
              __html: node.copy.childMarkdownRemark.excerpt,
            }}
          />
          <ReadMore>Click to read more</ReadMore>
        </BlogCopyHolder>
      </Link>
    </BlogPostHolder>
  )
}

const NewsPage = ({ data }) => (
  <Layout>
    <NewsWrapper>
      <TherapyHeader therapy="news" />
      <NewsContainer>
        <BlogPostList>
          {data.allContentfulBlog.edges.map(edge => (
            <BlogPost node={edge.node} />
          ))}
        </BlogPostList>
      </NewsContainer>
    </NewsWrapper>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog {
      edges {
        node {
          headline
          slug
          copy {
            childMarkdownRemark {
              excerpt
            }
          }
          image {
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
