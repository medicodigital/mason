import React from 'react'
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

const PostHolder = styled.main`
    max-width: 90vmin;
    margin: 10vh 0;
`

const Image = styled.img`
  max-height: 50vh;
  width: 100%;
  object-fit: cover;
`

const BlogPostHeadline = styled.h1`
  color: #161616;
  margin-top: 20px;
  `

const BlogPostDateline = styled.h4`
  color: #161616;
  margin-bottom: 5px;
`

const BlogPostTherapy = styled.h4`
  color: #626262;
  font-weight: bold;
  text-transform: uppercase;
`

const BlogPostCopy = styled.div`
  color: #161616;
  font-size: 20px;
  line-height: 1.5;
  ul {
    padding-left: 20px;
  }
  li {
    font-weight: bold;
    list-style-type: disc;
    margin-bottom: 10px;
  }
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

export default ({ data }) => {
  const post = data.contentfulBlog
  return (
    <Layout>
      <NewsWrapper>
        <TherapyHeader therapy="News" />
        <NewsContainer>
          <Image src={post.image.file.url} alt={post.image.description} />
          <PostHolder>
            <BlogPostHeadline>{post.headline}</BlogPostHeadline>
            <BlogPostDateline>{post.dateline}</BlogPostDateline>
            <BlogPostTherapy>{post.therapy}</BlogPostTherapy>
            <BlogPostCopy
              dangerouslySetInnerHTML={{
                __html: post.copy.childMarkdownRemark.html,
              }}
            />
          </PostHolder>
        </NewsContainer>
      </NewsWrapper>
      <StickyHolder>
        <Links />
      </StickyHolder>
    </Layout>
  )
}

export const query = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlog(slug: {eq: $slug}) {
            headline
            slug
            dateline(formatString: "DD MMMM, YYYY")
            therapy
            copy {
                childMarkdownRemark {
                    html
                  }
            }
            image {
                description
                file {
                  url
                }
              }
          }
    }
`
