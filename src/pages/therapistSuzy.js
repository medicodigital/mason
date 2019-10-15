import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import SEO from '../components/Seo'

import suzy from '../images/therapists/suzy-cain.jpeg'

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

const TherapistSuzy = () => (
  <Layout>
    <SEO title="Suzy Cain" keywords={[`homeopathy depression`, `homeopathy fatigue`, `homeopathy anxiety`, `herbal remedies near me`, `herbal doctor near me`, `homeopathy doctor`, `homeopathy clinic near me`, `homeopathic remedies`, `Suzy Cain`]}/>
    <TherapistWrapper>
      <TherapyHeader therapy="homeopathy" />
      <ImageBlurbContainer>
        <ImageHolder>
          <img src={suzy} alt="suzy headshot" />
        </ImageHolder>
        <BlurbHolder>
          <h1>Suzy Cain</h1>
          <h3>LCPH MHMA</h3>
          <a href="https://www.suzycainhomeopathy.co.uk">
            <h4>suzycainhomeopathy.co.uk</h4>
          </a>
          <p>
            Suzy qualified from the College of Practical Homeopathy in Finchley
            where she studied with some of the top homeopaths in the country.
            She is registered and insured with the Homeopathic Medical
            Association. Suzy is also a member of the British Institute for
            Allergy and Environmental Therapy and now offers homeopathy and
            allergy testing.
          </p>
          <p>
            A full time working mum herself she understands the rigorous demands
            of living in the 21st century. Before training as a homeopath she
            worked for twenty years in the fashion industry, which involved
            working to tight deadlines and much travelling. She is passionate
            about health and offering patients solutions and choices to their
            problems.
          </p>
        </BlurbHolder>
      </ImageBlurbContainer>
      <StickyHolder>
        <Links />
      </StickyHolder>
    </TherapistWrapper>
  </Layout>
)

export default TherapistSuzy
