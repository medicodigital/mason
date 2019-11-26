import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import SEO from '../components/Seo'

import jo from '../images/therapists/josheppard.jpeg'

const TherapistWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ImageBlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    order: 2;
    padding: 5vh 10vw;
  }
  @media (min-width: 900px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 10vh 10vw;
  }
`

const ImageHolder = styled.div`
  align-self: flex-start;
  margin: 20px auto;
  width: 60vw;
  > img {
    width: 100%;
  }
  @media (min-width: 900px) {
    margin: 0 20px 0 0;
    width: 30%;
  }
`

const BlurbHolder = styled.div`
  margin: 0 10%;
  @media (min-width: 600px) {
    margin: 0;
  }
  @media (min-width: 900px) {
    max-width: 30vw;
  }
  > h1,
  h3 {
    margin: 0;
    text-align: center;
  }
  > h1 {
    font-weight: 700;
  }
  > h3 {
    font-weight: 400;
  }
`

const StickyHolder = styled.div`
  background: #86aecf;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
  @media (min-width: 600px) {
    order: 1;
  }
`

const TherapistInga = () => (
  <Layout>
    <SEO title="Jo Sheppard" keywords={[`Jo Sheppard`, `Jo Sheppard osteopath`, `female osteopath`, `female osteopath near me`, `womens health osteopath`, `fertility help near me`, `osteopath near me`, `baby osteopath near me`]} />
    <TherapistWrapper>
      <TherapyHeader therapy="osteopathy" />
      <ImageBlurbContainer>
        <ImageHolder>
          <img src={jo} alt="Inga headshot" />
        </ImageHolder>
        <BlurbHolder>
          <h1>Jo Sheppard</h1>
          <h3>BSc &#40;Hons&#41; Osteopathy, DO</h3>
          <p>Jo graduated from the European School of Osteopathy, Maidstone in 2007 where she continues to lecture and mentor students. </p>
          <p>She believes that we are products of our whole life experience and is interested in hearing people's stories. She has a particular interest in psycho/emotional effects on the physical body, taking into consideration the condition of both body and mind at the onset of pain.</p>
          <p> Jo treats adults and children using a combination of structural and cranial techniques, tailoring each treatment to fit her patient's body type, condition and preferences. 
          </p>
        </BlurbHolder>
      </ImageBlurbContainer>
      <StickyHolder>
        <Links />
      </StickyHolder>
    </TherapistWrapper>
  </Layout>
)

export default TherapistInga
