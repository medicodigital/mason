import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import inga from '../images/therapists/IngaWnov2018.jpg'

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
    <TherapistWrapper>
      <TherapyHeader therapy="osteopathy" />
      <ImageBlurbContainer>
        <ImageHolder>
          <img src={inga} alt="Inga headshot" />
        </ImageHolder>
        <BlurbHolder>
          <h1>Inga Allen</h1>
          <h3>BSc &#40;Hons&#41; Osteopathy, DO</h3>
          <p>
            Inga Allen is co-owner of The Mason Clinic. Inga originally trained
            at the European School of Osteopathy where she is now involved in
            teaching. She has worked with people of all ages and loves working
            with babies, infants and expectant mothers in particular. Her
            approach is patient-centred where she uses a variety of gentle hands
            on techniques such as cranial osteopathy, visceral manipulations and
            joint mobilization.
          </p>
          <p>
            Inga encourages patients to take an active role in their own health
            too. She also gives advice on exercise and nutrition, therefore
            aiming towards whole body health.
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
