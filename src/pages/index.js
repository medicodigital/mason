import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'gatsby-link'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Links from '../components/Links'
import Therapies from '../components/Therapies'
import Contact from '../components/Contact'
import Fees from '../components/Fees'

import clinic from '../images/clinic.jpeg'
import bottles from '../images/bottles.jpeg'
import flowers from '../images/flowers.jpeg'

const IndexWrapper = styled.div`
  align-items: flex-start;
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media (min-width: 600px) {
    flex-direction: row;
    height: 12vh;
  }
  @media (min-width: 900px) {
    height: 10vh;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, -50%);
  }
`
const BlueButton = styled.button`
  background: #4189c8;
  border-width: 0;
  color: #fff;
  font-family: Lato, sans-serif;
  font-size: 35px;
  margin: 0 auto;
  padding: 10px;
  width: 100vw;
  :hover {
    background: #69a2d3;
    cursor: pointer;
  }
  @media (min-width: 600px) {
    font-size: 25px;
    width: 25vw;
  }
  @media (min-width: 900px) {
    font-size: 3vw;
  }
`
const DarkBlueButton = styled(BlueButton)`
  background: #274f73;
  :hover {
    background: #346999;
  }
`
const GreenButton = styled(BlueButton)`
  background: #86ab45;
  :hover {
    background: #9ec063;
  }
`
const DarkButton = styled(BlueButton)`
  background: #34829d;
  :hover {
    background: #56aac7;
  }
`
const StickyHolder = styled.div`
  background: #ddeaf6;
  color: #142c14;
  position: sticky;
  top: 0;
  z-index: 1;
`
const Clinic = styled.div`
  background: #86ab45;
  margin: 0 auto;
  width: 100%;
  > img {
    width: 100%;
  }
`
const PicWrapper = styled.div`
  display: flex;
  width: 100vw;
`
const Bottles = styled.div`
  background: #276277;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 900px) {
    width: 50%;
  }
  > img {
    object-fit: cover;
    width: 100%;
  }
`
const Flowers = styled(Bottles)`
  display: none;
  width: 50%;
  @media (min-width: 900px) {
    display: block;
  }
`

const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <Header />
      <ButtonContainer>
        <AnchorLink offset="70" href="#therapies">
          <BlueButton>Therapies</BlueButton>
        </AnchorLink>
        <Link to="/news">
          <DarkBlueButton>News</DarkBlueButton>
        </Link>
        <AnchorLink offset="70" href="#contact">
          <GreenButton>Find us</GreenButton>
        </AnchorLink>
        <AnchorLink offset="70" href="#fees">
          <DarkButton>Fees</DarkButton>
        </AnchorLink>
      </ButtonContainer>
      <StickyHolder>
        <Links />
      </StickyHolder>
      <section id="therapies">
        <Therapies />
      </section>
      <Clinic>
        <img src={clinic} alt="Mason Clinic exterior" />
      </Clinic>
      <section id="contact">
        <Contact />
      </section>
      <PicWrapper>
        <Bottles>
          <img src={bottles} alt="bottles on shelf" />
        </Bottles>
        <Flowers>
          <img src={flowers} alt="Flowers on shelf" />
        </Flowers>
      </PicWrapper>
      <section id="fees">
        <Fees />
      </section>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
