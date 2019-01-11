import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import vincent from '../images/therapists/vincent-martino.jpeg'

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
    > h1, h3 {
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

const TherapistVincent = () => (
  <Layout>
    <TherapistWrapper>
      <TherapyHeader therapy="osteopathy" />
      <ImageBlurbContainer>
        <ImageHolder>
          <img src={vincent} alt="Vincent headshot" />
        </ImageHolder>
        <BlurbHolder>
          <h1>Vincent Martino</h1>
          <h3>DO, MOst</h3>
          <p>
            A graduate of the European School of Osteopathy in Maidstone,
            Vincent is an holistic osteopath who has studied osteopathy in both
            France and England. His studies in both countries provide him a
            broad osteopathic approach that he uses in practice, such as
            cranial, visceral and structural osteopathy. Vincent enjoys treating
            patients from all backgrounds, taking time to explain the origin of
            their pain, and what can be done through treatment to improve it. He
            also likes to advise on what work and home habits could be changed
            to create a feeling of well-being and provide further improvement
            over time.
          </p>
          <p>
            Vincent has also a particular interest in the treatment of pregnant
            women and babies. For him osteopathic treatment before birth is very
            important making sure all the joints of the pelvis can move freely
            in order for the birth to be as smooth as possible.
          </p>
          <p>
            Vincent is happy to conduct his sessions in French as he knows that
            for the large French community in Kent it is often easier for
            patients to describe their aches and pain in their mother tongue.
          </p>
        </BlurbHolder>
      </ImageBlurbContainer>
      <StickyHolder>
        <Links />
      </StickyHolder>
    </TherapistWrapper>
  </Layout>
)

export default TherapistVincent
