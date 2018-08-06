import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import ingaJdeep from '../images/therapists/ingaJdeep.jpeg'

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

const TherapistIngaJ = () => (
  <TherapistWrapper>
    <TherapyHeader therapy="osteopathy" />
    <ImageBlurbContainer>
      <ImageHolder>
        <img src={ingaJdeep} alt="IngaJ full-length" />
      </ImageHolder>
      <BlurbHolder>
        <h1>Inga Jakubovskaja</h1>
        <h3>MOst</h3>
        <p>
          Inga graduated from the European School of Osteopathy with an
          Integrated Master’s Degree. Every patient will note the smile on her
          face and a friendly handshake when meeting her. Inga strongly believes
          that communication is the key to any treatment and with patient and
          practitioner interaction, achieves positive results. With her skills
          and enthusiasm for osteopathy, she provides diagnostic ability and
          treatment for all patients from different backgrounds and ages, and
          provides tailor-made management plans. She has a particular interest
          in paediatric and maternity osteopathy, and especially enjoys these
          treatments.
        </p>
        <p>
          Other than osteopathy Inga holds accreditation in Classic Massage and
          Kinesiology Taping.
        </p>
        <p>
          {' '}
          When Inga isn’t practising in the clinic, she’s making chain maille
          jewellery and keeping fit with her beloved Siberian husky, who puts
          her through her paces. In the evenings she loves to immerse herself in
          a good book.
        </p>
      </BlurbHolder>
    </ImageBlurbContainer>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </TherapistWrapper>
)

export default TherapistIngaJ
