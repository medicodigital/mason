import React from 'react'
import styled from 'styled-components'

import NoLinkHeader from '../components/NoLinkHeader'
import Links from '../components/Links'
import Therapist from '../components/Therapist'

import lavender from '../images/lavender.jpg'
import suzy from '../images/therapists/suzy-cain.jpeg'

const AllergyWrapper = styled.div`
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

const AllergyPage = () => (
  <AllergyWrapper>
    <NoLinkHeader therapy="Allergy testing" />
    <HeroHolder>
      <ImageHolder>
        <img src={lavender} alt="lavender" />
      </ImageHolder>
      <Therapist firstname="Suzy" surname="Cain" pic={suzy} />
      <BlurbHolder>
        <p>
          {' '}
          Your health and wellbeing may be affected by a number of different
          factors that you are in direct contact with on a regular basis such as
          food, pets, environmental pollutants, exhaust fumes, chemicals and
          even detergents.
        </p>
        <p>
          {' '}
          Suzy can help you identify these potential allergens using muscle
          testing and from there will devise a programme which may involve
          desensitizing remedies, supplements and homeopathic remedies depending
          on what would be the best course of action for you. She will then give
          you a report of all the things identified in the test that day for you
          to take away, as this information can be very helpful in the next
          weeks following your test.
        </p>
      </BlurbHolder>
    </HeroHolder>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </AllergyWrapper>
)

export default AllergyPage
