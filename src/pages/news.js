import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

const NewsWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  width: 100%;
`

const NewsContainer = styled.main`
  display: flex;
  align-items: center;
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

const NewsPage = () => (
  <NewsWrapper>
    <TherapyHeader therapy="News" />
    <NewsContainer>
      <h1>News</h1>
    </NewsContainer>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </NewsWrapper>
)

export default NewsPage
