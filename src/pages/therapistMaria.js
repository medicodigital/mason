import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import maria from '../images/therapists/maria2018.jpeg'

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

const TherapistMaria = () => (
  <TherapistWrapper>
    <TherapyHeader therapy="reflexology" />
    <ImageBlurbContainer>
      <ImageHolder>
        <img src={maria} alt="maria headshot" />
      </ImageHolder>
      <BlurbHolder>
        <h1>Maria Mahon</h1>
        <h3>Reflexologist</h3>
        <p>
          Maria studied massage therapy and reflexology in London and has been
          working as a therapist since 2007. She finds her work on reflexology
          for infertility and maternity particularly rewarding, especially for
          overdue ladies. Many have said afterwards that their babies are very
          calm. She is still fascinated by the outcomes of reflexology and
          always learning something new.
        </p>
        <p>
          Maria has recently introduced the Bergman Method of Facial Reflexology
          which provides all the benefits of foot reflexology plus the added
          benefits of producing smoother, glowing skin helping wrinkles look
          reduced. Massaging pressure points on the face, provides a very
          calming, stress relieving treatment. Collagen and elastin is
          stimulated, possibly delaying the need for botox or fillers. The
          difference is immediate and noticeable.
        </p>
        <p>
          She has also started offering Hopi Ear Candling, an ancient therapy
          that is relaxing and rejuvenating, and can be helpful for a variety of
          ear, nose and throat conditions
        </p>
        <p>
          In her spare time, Maria enjoys walking her dog and exploring Kent.
        </p>
      </BlurbHolder>
    </ImageBlurbContainer>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </TherapistWrapper>
)

export default TherapistMaria
