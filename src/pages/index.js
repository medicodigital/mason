import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Header from '../components/Header'
import Links from '../components/Links'
import Therapies from '../components/Therapies'
import Contact from '../components/Contact'
import Fees from '../components/Fees'

const IndexWrapper = styled.div`
  align-items: flex-start;
  background: #ddeaf6;
  display: flex
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
  font-family: 'Lato', sans-serif;
  font-size: 35px;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  :hover {
    background: #69a2d3;
  }
  @media (min-width: 600px) {
    font-size: 45px;
  }
  @media (min-width: 900px) {
    font-size: 3vw;
  }
`
const GreenButton = BlueButton.extend`
  background: #86ab45;
  :hover {
    background: #9ec063;
  }
`
const DarkButton = BlueButton.extend`
  background: #276277;
  :hover {
    background: #34829d;
  }
`

const StickyHolder = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`

const IndexPage = () => (
  <IndexWrapper>
    <Header />
    <ButtonContainer>
      <BlueButton>
        <AnchorLink offset="70" href="#therapies">
        Therapies
        </AnchorLink>
      </BlueButton>
      <GreenButton>
        <AnchorLink offset="70" href="#contact">
        Contact us
        </AnchorLink>
      </GreenButton>
      <DarkButton>
        <AnchorLink offset="70" href="#fees">
        Fees
        </AnchorLink>
      </DarkButton>
    </ButtonContainer>
    <StickyHolder>
      <Links />
    </StickyHolder>
    <section id="therapies">
      <Therapies />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <section id="fees">
      <Fees />
    </section>
  </IndexWrapper>
)

export default IndexPage
