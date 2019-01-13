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

const PostHolder = styled.article`
    max-width: 70vw;
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
        <TherapyHeader therapy="Blog" />
        <NewsContainer>
          <PostHolder>
            <h1>{post.headline}</h1>
            <h6>{post.dateline}</h6>
            <h6>{post.therapy}</h6>
            <img src={post.image.file.url} alt={post.image.description} />
            <div
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
            dateline
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
