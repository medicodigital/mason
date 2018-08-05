import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

const TherapistWrapper = styled.div`
  background: #86aecf;
  color: #fff;
  display: flex;
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
    width: 30vw;
  }
`

const WordsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    line-height: 95%;
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

const Therapist = props => (
  <TherapistWrapper>
    <WordsContainer>
      <Link to={`/therapist${props.firstname}`}>
        <h2>Therapist</h2>
        <h1>{props.firstname + ' ' + props.surname}</h1>
        <AboutHolder>
          <Icon size={20} icon={arrowRightThin} />
          <p>About {props.firstname}</p>
        </AboutHolder>
      </Link>
    </WordsContainer>
    <ImageContainer>
      <img src={props.pic} alt="therapist headshot" />
    </ImageContainer>
  </TherapistWrapper>
)

export default Therapist
