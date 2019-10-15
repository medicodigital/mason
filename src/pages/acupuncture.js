import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Therapist from '../components/Therapist'
import SEO from '../components/Seo'

import acupuncture from '../images/acupuncture.jpg'
import renate from '../images/therapists/renate.jpg'

const AcupunctureWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const ImageHolder = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 600px) {
    max-width: 60%;
    margin-top: 7vh;
  }
  > img {
    display: block;
    max-height: 50vh;
    object-fit: cover;
    width: 100%;
    @media (min-width: 900px) {
      min-height: 270px;
    }
  }
`

const BlurbHolder = styled.div`
  font-size: 1.2rem;
  margin: 0 10%;
  padding: 5% 0;
  @media (min-width: 600px) {
    margin: 0 auto;
    max-width: 60%;
    padding: 2% 0;
  }
  @media (min-width: 900px) {
    margin: 0 auto;
    max-width: 60%;
    padding: 0;
  }
  p {
    :last-of-type {
      @media (min-width: 1200px) {
        column-count: 2;
      }
    }
  }
`

const HeroHolder = styled.div`
  @media (min-width: 600px) {
    order: 2;
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

const ConditionsContainer = styled.div`
  background: #86aecf;
  color: #fff;
  padding: 5% 10%;
  max-width: 100vw;
  @media (min-width: 600px) {
    order: 3;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 900;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  ul {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    li {
      margin-top: 2px;
    }
    @media (min-width: 600px) {
      column-count: 2;
    }
    @media (min-width: 1200px) {
      column-count: 3;
    }
  }
`

const AcupuncturePage = () => (
  <Layout>
    <SEO title="acupuncture" keywords={[`acupuncture doctor near me`, `best acupuncture doctor near me`, `acupuncture treatment for back pain`, `acupuncture Chatham`, `acupuncture Rochester`, `acupuncture Kent`, `acupuncture pain`]} />
    <AcupunctureWrapper>
      <TherapyHeader therapy="Acupuncture" />
      <HeroHolder>
        <ImageHolder>
          <img src={acupuncture} alt="acupuncture" />
        </ImageHolder>
        <Therapist firstname="Renate" surname="Blacker" pic={renate} />
        <BlurbHolder>
          <p>
            {' '}
            Over the past 20 years acupuncture has risen to the forefront of
            alternative therapies and is a key treatment at The Mason Clinic.
            Firmly established in the West, it is used to treat a wide variety
            of conditions – not only physical problems and injuries, but also
            problems associated with stress such as chronic headaches and
            allergies. Acupuncture is also core to the Zita West fertility
            programme which we are proud to be affiliated to.{' '}
          </p>
          <p>
            {' '}
            Practised successfully for thousands of years, acupuncture is a
            traditional branch of Chinese medicine. The Chinese adopted an
            holistic approach to medicine, believing the body works as a
            balanced structure. Anything causing an imbalance would create
            disharmony in the energy flow so causing ill-health. Working through
            a complex system of channels or meridians, acupuncture is said to
            work by re-balancing the Qi (Chee) i.e. the energy flow.
          </p>
        </BlurbHolder>
      </HeroHolder>
      <StickyHolder>
        <Links />
      </StickyHolder>
      <ConditionsContainer>
        <h2>ACUPUNCTURE CAN HELP WITH:</h2>
        <ul>
          <li>&bull; Tension headaches and stress</li>
          <li>&bull; Migraine</li>
          <li>&bull; Slipped disc (herniated disc or prolapsed disc)</li>
          <li>&bull; Joint problems</li>
          <li>&bull; Frozen shoulder</li>
          <li>&bull; Tennis Elbow</li>
          <li>&bull; Golfer’s Elbow</li>
          <li>&bull; Lumbago</li>
          <li>&bull; Shoulder, neck, and back pain</li>
          <li>&bull; Sciatica</li>
          <li>&bull; Asthma</li>
          <li>&bull; Anxiety</li>
          <li>&bull; Knee pain</li>
          <li>&bull; Morning sickness</li>
          <li>&bull; Arthritic pain</li>
          <li>&bull; Fibromyalgia Syndrome</li>
          <li>&bull; Hay fever</li>
          <li>&bull; Digestive disorders</li>
          <li>&bull; Irregular periods, painful periods, PMT</li>
          <li>&bull; Menopause symptoms</li>
          <li>&bull; Couples needing fertility treatment (Zita West)</li>
          <li>&bull; IVF support (Zita West)</li>
        </ul>
        <p>
          Acupuncturists treat a wide range of conditions. If you don’t see your
          problem listed here then please ask.
        </p>
      </ConditionsContainer>
    </AcupunctureWrapper>
  </Layout>
)

export default AcupuncturePage
