import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import john from '../images/therapists/john2018.jpg'

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

const TherapistJohn = () => (
  <TherapistWrapper>
    <TherapyHeader therapy="podiatry" />
    <ImageBlurbContainer>
      <ImageHolder>
        <img src={john} alt="john headshot" />
      </ImageHolder>
      <BlurbHolder>
        <h1>John Balchin</h1>
        <h3>BSc (Hons), PodMed, SRCh, MSCP</h3>
        <p>
          John studied at the Leaf Hospital Department of Podiatry, University
          of Brighton. On qualifying, he was retained as a tutor in the
          department on a one year contract. His honors degree in podiatry is
          complimented by a qualification in local anesthesia, which allows him
          to perform nail surgery when required.
        </p>
        <p>
          After a twelve year career in the NHS, John now works full time as a
          private practitioner and finds that the more relaxed atmosphere of the
          Mason Clinic results in better treatments and outcomes for patients.
        </p>
        <p>
          Outside of work, John enjoys playing his guitar (badly), building cars
          (with slightly more success) and trying to stop his old house falling
          down!
        </p>
      </BlurbHolder>
    </ImageBlurbContainer>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </TherapistWrapper>
)

export default TherapistJohn
