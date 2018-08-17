import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import massage from '../images/massage.jpg'
import ingaJ from '../images/therapists/ingaJ.jpeg'

const MassageWrapper = styled.div`
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

const TherapistWrapper = styled.div`
  background: #86aecf;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 20px;
  max-width: 100vw;
  @media (min-width: 600px) {
    margin: 0 auto;
    padding: 20px 0;
    width: 60vw;
  }
  @media (min-width: 900px) {
    margin: 5vh auto 0;
    width: 40vw;
  }
  @media (min-width: 1200px) {
    float: right;
    margin: 3vh 20vw 5vh 5vw;
    width: 25vw;
  }
`

const WordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    margin-left: 20px;
  }
  h2 {
    font-size: 8vw;
    font-weight: 200;
    margin: 0;
    @media (min-width: 600px) {
      font-size: 4vw;
    }
    @media (min-width: 900px) {
      font-size: 3vw;
    }
    @media (min-width: 1200px) {
      font-size: 2vw;
    }
  }
  h1 {
    font-size: 11vw;
    font-weight: 600;
    margin: 0;
    width: 150px;
    @media (min-width: 600px) {
      font-size: 6vw;
    }
    @media (min-width: 900px) {
      font-size: 5vw;
    }
    @media (min-width: 1200px) {
      font-size: 3.5vw;
    }
  }
`

const ImageContainer = styled.div`
  height: 20vh;
  margin: 5px 0;
  width: 130px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const AboutHolder = styled.div`
  display: flex;
  margin-top: 5px;
  p {
    font-size: 5vw;
    margin: 0 0 0 5px;
    @media (min-width: 600px) {
      font-size: 2.5vw;
    }
    @media (min-width: 900px) {
      font-size: 2vw;
    }
    @media (min-width: 1200px) {
      font-size: 1.5vw;
    }
  }
`

const MassagePage = () => (
  <MassageWrapper>
    <TherapyHeader therapy="Massage" />
    <HeroHolder>
      <ImageHolder>
        <img src={massage} alt="massage" />
      </ImageHolder>

      <TherapistWrapper>
        <WordsContainer>
          <Link to="/therapistIngaJ">
            <h2>Therapist</h2>
            <ImageContainer>
              <img src={ingaJ} alt="therapist headshot" />
            </ImageContainer>
            <h1>Inga Jakubovskaja</h1>
            <AboutHolder>
              <Icon size={20} icon={arrowRightThin} />
              <p>About Inga</p>
            </AboutHolder>
          </Link>
        </WordsContainer>
      </TherapistWrapper>

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
  </MassageWrapper>
)

export default MassagePage
