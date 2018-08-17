import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Therapist from '../components/Therapist'

import homeopathy from '../images/homeopathy.jpg'
import suzy from '../images/therapists/suzy-cain.jpeg'

const HomeopathyWrapper = styled.div`
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

const BlurbHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 5px;
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

const HomeopathyPage = () => (
  <HomeopathyWrapper>
    <TherapyHeader therapy="Homeopathy" />
    <HeroHolder>
      <ImageHolder>
        <img src={homeopathy} alt="homeopathy" />
      </ImageHolder>
      <Therapist firstname="Suzy" surname="Cain" pic={suzy} />
      <BlurbHolder>
        <p>
          {' '}
          Homeopathy is a holistic medicine which uses specially prepared,
          highly diluted substances (given mainly in tablet form) with the aim
          of triggering the body’s own healing mechanisms. It’s based on a
          series of ideas developed in the 1790s by a German doctor called
          Samuel Hahnemann, who was looking for a way to reduce the damaging
          side effects associated with the medical treatment of his day. It is
          used on an extremely wide range of conditions, including physical
          conditions such as asthma and psychological conditions such as
          depression. A homeopath will prescribe medicines according to the
          patient’s specific set of symptoms, and how they experience them,
          taking into account their overall level of health.
        </p>
        <p>
          {' '}
          Homeopathy is based on the principle of “like treats like” – that is,
          a substance which can cause symptoms when taken in large doses, can be
          used in small amounts to treat similar symptoms. For example, drinking
          too much coffee can cause sleeplessness and agitation, so according to
          this principle, when made into a homeopathic medicine, it could be
          used to treat people suffering from sleeplessness and agitation.
        </p>
        <BlurbHeader>WHAT TO EXPECT DURING YOUR APPOINTMENT</BlurbHeader>
        <p>
          A homeopath’s job is to gain a thorough understanding of your health
          and the exact symptoms you are experiencing. With detailed knowledge
          they can find a homeopathic medicine (known as a ‘remedy’) that
          matches you and your symptoms as closely as possible. During the first
          consultation, you will be asked lots of questions to build up a
          complete picture, taking into account a wide variety of factors such
          as medical history, personality traits, stress triggers, likes and
          dislikes, lifestyle and dreams. Because homeopathy looks at the whole
          picture, patients who have the same diagnosed illness – hay fever, for
          example – are each likely to need different homeopathic medicines.
        </p>
      </BlurbHolder>
    </HeroHolder>
    <StickyHolder>
      <Links />
    </StickyHolder>
    <ConditionsContainer>
      <h2>HOMEOPATHY CAN HELP WITH:</h2>
      <ul>
        <li>&bull; Allergies</li>
        <li>&bull; Migraines</li>
        <li>&bull; Depression</li>
        <li>&bull; Chronic fatigue syndrome</li>
        <li>&bull; Rheumatoid arthritis</li>
        <li>&bull; Irritable bowel syndrome</li>
        <li>&bull; Infertility</li>
        <li>&bull; Premenstrual syndrome</li>
        <li>&bull; Asthma</li>
        <li>&bull; Ear infections</li>
        <li>&bull; Hay fever</li>
        <li>&bull; Depression, stress and anxiety</li>
        <li>&bull; Dermatitis</li>
        <li>&bull; Arthritis</li>
        <li>&bull; High blood pressure</li>
        <li>&bull; Snoring</li>
        <li>&bull; Sinusitis</li>
        <li>&bull; Psoriasis</li>
        <li>&bull; Fibromyalgia</li>
        <li>&bull; Insomnia</li>
        <li>&bull; Varicose veins</li>
        <li>
          &bull; It can also be used for minor issues like bruises, scrapes,
          toothaches, headaches, nausea, coughs, and colds
        </li>
      </ul>
      <p>
        Homeopathy can help a wide range of conditions. If you don’t see your
        problem listed here, please ask.
      </p>
    </ConditionsContainer>
  </HomeopathyWrapper>
)

export default HomeopathyPage
