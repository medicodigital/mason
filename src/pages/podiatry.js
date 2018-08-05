import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Therapist from '../components/Therapist'

import acupuncture from '../images/acupuncture.jpg'
import renate from '../images/therapists/renate.jpg'

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
  <PodiatryWrapper>
    <TherapyHeader therapy="Podiatry" />
    <HeroHolder>
      <ImageHolder>
        <img src={acupuncture} alt="acupuncture" />
      </ImageHolder>
      <Therapist firstname="John" surname="Balchin" pic={renate} />
      <BlurbHolder>
        <p>
          {' '}
          Podiatry is a fast evolving healthcare profession concerned with the
          assessment, diagnosis and treatment of lower limb and foot injuries,
          diseases and abnormalities. The foot is a highly complex structure,
          comprising 26 bones and together the feet make up over a quarter of
          the bones in the adult body! So like any complex mechanism feet are
          prone to mechanical problems and benefit from regular maintenance.
        </p>
        <p>
          {' '}
          There is often confusion between what is a ‘podiatrist’ and a
          ‘chiropodist’ but they are the same. The word ‘chiropody’, in use
          since the 1700’s with regards to footcare specialists, is actually a
          misnomer. It derives from the Greek ‘chiro’ meaning ‘hand’ and ‘pous’
          meaning foot (plural ‘podes’). In the US, ‘chiropody’ was used until
          1958 when it was officially changed to ‘podiatry.’ Now ‘podiatrist’ is
          becoming universally adopted.
        </p>
      </BlurbHolder>
    </HeroHolder>
    <StickyHolder>
      <Links />
    </StickyHolder>
    <ConditionsContainer>
      <h2>PODIATRY CAN TREAT:</h2>
      <ul>
        <li>
          &bull; General Podiatry including verrucae, corns, calluses, fungal
          infections (including athlete’s foot), etc.
        </li>
        <li>&bull; Foot, leg and back pain</li>
        <li>&bull; Toenail problems and toenail surgery</li>
        <li>&bull; Heel and forefoot pain</li>
        <li>&bull; Plantar fasciitis</li>
        <li>&bull; Knee pain and flat feet</li>
        <li>&bull; Foot skin infections and disorders</li>
        <li>&bull; Gait and posture analysis</li>
        <li>&bull; Hammer toe</li>
        <li>&bull; Bunions and toe deformities</li>
        <li>&bull; Neuroma</li>
        <li>&bull; Ankle sprains and strains</li>
        <li>&bull; Biomechanical assessments</li>
        <li>&bull; Pregnancy-related feet problems</li>
        <li>&bull; Orthoses / Orthotics (insoles)</li>
        <li>&bull; Stress fractures</li>
        <li>&bull; 'Shin Splints' (Anterior Compartment Syndrome)</li>
        <li>&bull; 'Growing pains'</li>
        <li>&bull; Arthritis problems of the lower limb</li>
        <li>&bull; Diabetes foot care</li>
        <li>&bull; Footwear advice</li>
      </ul>
      <p>
        Acupuncturists treat a wide range of conditions. If you don’t see your
        problem listed here then please ask.
      </p>
    </ConditionsContainer>
  </PodiatryWrapper>
)

export default AcupuncturePage
