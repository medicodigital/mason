import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Osteopaths from '../components/Osteopaths'

import shoulders from '../images/osteoshoulders.jpeg'
import inganeck from '../images/inganeck.jpeg'
import treattable from '../images/treattable.jpeg'
import osteobaby from '../images/osteobaby.jpg'

const OsteopathyWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const HeroHolder = styled.div`
  @media (min-width: 600px) {
    order: 2;
  }
`

const BottomHolder = styled.div`
  @media (min-width: 600px) {
    order: 3;
  }
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
      min-height: 300px;
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
`

const BlurbHeader = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  margin-bottom: 5px;
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

const BlurbPicContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 900px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 60%;
    > div {
      margin-right: 20px;
    }
  }
`

const ConditionsContainer = styled.div`
  background: #86aecf;
  color: #fff;
  padding: 5% 10%;
  max-width: 100vw;
  h2 {
    font-size: 1.4rem;
    font-weight: 900;
    margin: 0 0 10px 0;
  }
  p {
    font-size: 1.2rem;
    margin: 0 0 5px 0;
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

const OsteopathyPage = () => (
  <Layout>
    <OsteopathyWrapper>
      <TherapyHeader therapy="osteopathy" />
      <HeroHolder>
        <ImageHolder>
          <img src={shoulders} alt="treating shoulders" />
        </ImageHolder>
        <Osteopaths />
        <BlurbHolder>
          Our osteopaths adopt an holistic approach to patient care. We provide
          physical therapy that complements your body’s ability to heal
          naturally. Your internal organs, blood vessels, nerves and lymphatic
          system are supported by your musculo-skeletal system. Problems with
          one have an adverse effect on the other. That’s why social and
          psychological factors are important elements in our diagnosis since
          these impact health.
        </BlurbHolder>
      </HeroHolder>
      <StickyHolder>
        <Links />
      </StickyHolder>
      <BottomHolder>
        <BlurbPicContainer>
          <ImageHolder>
            <img src={inganeck} alt="treating neck" />
          </ImageHolder>
          <BlurbHolder>
            <BlurbHeader>STRUCTURAL OSTEOPATHY</BlurbHeader>
            Structural osteopathy is the type of osteopathy most people are
            familiar with. It comprises a number of techniques such as muscle
            and connective tissue stretching, rhythmic joint movement, gentle
            release techniques and the occasional high thrust movement. It can
            cause the occasional cracking or popping noise but is generally
            painless.
          </BlurbHolder>
        </BlurbPicContainer>
        <BlurbPicContainer>
          <ImageHolder>
            <img src={osteobaby} alt="hands on head" />
          </ImageHolder>
          <BlurbHolder>
            <BlurbHeader>CRANIAL OSTEOPATHY</BlurbHeader>
            Cranial osteopathy is a subtle and refined form of osteopathy. It
            encourages the release of unwanted tensions and stresses held within
            the head and body. Releasing these stresses provides the patient
            with asense of well-being. Cranial osteopathy is a gentle treatment
            for a wide range of conditions.
          </BlurbHolder>
        </BlurbPicContainer>
        <ImageHolder>
          <img src={treattable} alt="treatment table" />
        </ImageHolder>
        <BlurbHolder>
          <BlurbHeader>WHAT TO EXPECT FROM YOUR APPOINTMENT</BlurbHeader>
          We start by reviewing your medical history and any lifestyle factors
          that might have a bearing. This is usually followed by some simple
          physical tests – e.g. blood pressure, pulse and reflex. We then check
          out your general mobility before examining the painful areas in more
          detail. If we have enough information we will provide our diagnosis
          and recommendations. You may be asked to undress to your underclothes.
          If this is difficult for you please let us know and we will try to
          work around this but please wear something you are comfortable in. You
          are welcome to bring a friend or relative along with you. We have male
          and female osteopaths available. Let us know if you have a preference.
        </BlurbHolder>
        <ConditionsContainer>
          <h2>CONDITIONS WE ROUTINELY TREAT</h2>
          <p>
            Our osteopaths provide effective treatment for a wide range of
            conditions, including...
          </p>
          <ul>
            <li>&bull; General aches and pains</li>
            <li>
              &bull; Joint pains including hip and knee pain from osteoarthritis
              as an adjunct to core OA treatments and exercise
            </li>
            <li>&bull; Arthritic pain</li>
            <li>
              &bull; General, acute & chronic backache, back pain (not arising
              from injury or accident)
            </li>
            <li>
              &bull; Uncomplicated mechanical neck pain (as opposed to neck pain
              following injury i.e. whiplash)
            </li>
            <li>&bull; Headache arising from the neck (cervicogenic)</li>
            <li>&bull; Migraine prevention</li>
            <li>
              &bull; Frozen shoulder/ shoulder and elbow pain/ tennis elbow
              (lateral epicondylitis) arising from associated musculoskeletal
              conditions of the back and neck, but not isolated occurrences
            </li>
            <li>&bull; Circulatory problems</li>
            <li>&bull; Cramp</li>
            <li>&bull; Digestion problems</li>
            <li>&bull; Joint pains, lumbago</li>
            <li>&bull; Sciatica</li>
            <li>&bull; Muscle spasms</li>
            <li>&bull; Neuralgia</li>
            <li>&bull; Fibromyalgia</li>
            <li>&bull; Inability to relax</li>
            <li>&bull; Rheumatic pain</li>
            <li>&bull; Minor sports injuries and tensions</li>
          </ul>
        </ConditionsContainer>
      </BottomHolder>
    </OsteopathyWrapper>
  </Layout>
)

export default OsteopathyPage
