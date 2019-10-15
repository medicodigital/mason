import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import SEO from '../components/Seo'

import renate from '../images/therapists/renate.jpg'

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
  h3,
  h4 {
    margin: 0;
    text-align: center;
  }
  > h1,
  h4 {
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

const TherapistRenate = () => (
  <Layout>
    <SEO title="Renate Blacker" keywords={[`Zita West`, `IVF Chatham`, `Zita West Kent`, `Chinese herbalist Chatham`, `chronic pain Chatham`, `chronic pain Kent`, `Renate Blacker`, `acupuncturist Chatham`, `acupuncture near me`, `Chinese medicine Kent`]} />
    <TherapistWrapper>
      <TherapyHeader therapy="acupuncture" />
      <ImageBlurbContainer>
        <ImageHolder>
          <img src={renate} alt="renate headshot" />
        </ImageHolder>
        <BlurbHolder>
          <h1>Renate Blacker</h1>
          <h3>MBAcC</h3>
          <a href="http://www.blacker-acupuncture.co.uk">
            <h4>blacker-acupuncture.co.uk</h4>
          </a>
          <p>
            Renate Blacker has been a healthcare professional for more than 20
            years, as a general nurse to begin with and then qualifying as an
            acupuncturist and Chinese herbalist. Many patients come for painful
            conditions and acupuncture works very well for acute injuries and
            chronic pain.
          </p>
          <p>
            Renate also specialises in fertility issues and IVF support. Women
            can have treatment throughout their pregnancy including before and
            after the birth. She is a member of the British Acupuncture Council,
            the Zita West Network and the Register of Chinese Herbal Medicine,
            which ensure a high standard of practise and professional
            development.
          </p>
          <p>
            She explains: “I use a lot of massage and acupressure techniques,
            which are good for children and people who are worried about the
            needles. The treatment should be a pleasant experience.”
          </p>
        </BlurbHolder>
      </ImageBlurbContainer>
      <StickyHolder>
        <Links />
      </StickyHolder>
    </TherapistWrapper>
  </Layout>
)

export default TherapistRenate
