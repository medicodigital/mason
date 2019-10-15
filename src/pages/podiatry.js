import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Therapist from '../components/Therapist'
import SEO from '../components/Seo'

import podiatry from '../images/podiatry2018.jpg'
import john from '../images/therapists/foot-john.jpeg'

const PodiatryWrapper = styled.div`
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

const PodiatryPage = () => (
  <Layout>
    <SEO title="podiatry" keywords={[`podiatry Chatham`, `podiatry Rochester`, `podiatry Kent`, `podiatrist Chatham`, `podiatrist Rochester`, `foot care Chatham`, `bunions Kent`, `foot pain Chatham`, `Plantar fasciitis Kent`, `chiropody Chatham`, `chiropodist near me`]}/>
    <PodiatryWrapper>
      <TherapyHeader therapy="Podiatry" />
      <HeroHolder>
        <ImageHolder>
          <img src={podiatry} alt="podiatry" />
        </ImageHolder>
        <Therapist firstname="John" surname="Balchin" pic={john} />
        <BlurbHolder>
          <p>
            {' '}
            Podiatry is a fast evolving healthcare profession concerned with the
            assessment, diagnosis and treatment of lower limb and foot injuries,
            diseases and abnormalities. The foot is a highly complex structure
            comprising 26 bones, and together the feet make up over a quarter of
            the bones in the adult body. So like any complex mechanism feet are
            prone to mechanical problems and benefit from regular maintenance.
          </p>
          <p>
            {' '}
            There is often confusion between what is a ‘podiatrist’ and a
            ‘chiropodist’ but they are the same. The word ‘chiropody’, in use
            since the 1700’s with regards to footcare specialists, is actually a
            misnomer. It derives from the Greek ‘chiro’ meaning ‘hand’ and
            ‘pous’ meaning foot (plural ‘podes’). In the US, ‘chiropody’ was
            used until 1958 when it was officially changed to ‘podiatry.’ Now
            ‘podiatrist’ is becoming universally adopted.
          </p>
        </BlurbHolder>
      </HeroHolder>
      <StickyHolder>
        <Links />
      </StickyHolder>
      <ConditionsContainer>
        <h2>OUR TREATMENTS:</h2>
        <ul>
          <li>
            &bull; General Podiatry including verrucae, corns, calluses, fungal
            infections (including athlete’s foot), etc.
          </li>
          <li>&bull; Foot, leg and back pain</li>
          <li>&bull; Nail surgery for ingrown toe nails or other reasons</li>
          <li>&bull; Heel and forefoot pain</li>
          <li>&bull; Plantar fasciitis</li>
          <li>&bull; Knee pain and flat feet</li>
          <li>&bull; Foot skin infections and disorders</li>
          <li>&bull; Gait and posture analysis</li>
          <li>&bull; Hammer toe</li>
          <li>&bull; Bunions and toe deformities</li>
          <li>&bull; Neuroma</li>
          <li>&bull; Ankle sprains and strains</li>
          <li>&bull; Pregnancy-related feet problems</li>
          <li>&bull; Orthoses / Orthotics (insoles)</li>
          <li>&bull; Arthritis problems of the lower limb</li>
          <li>&bull; Diabetes foot care</li>
          <li>&bull; Footwear advice</li>
        </ul>
      </ConditionsContainer>
    </PodiatryWrapper>
  </Layout>
)

export default PodiatryPage
