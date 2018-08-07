import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import hero from '../images/hero.jpeg'

const HeaderWrapper = styled.div`
  position: relative;
  width: 100vw;
`

const Hero = styled.img`
  display: block;
  margin: 0 auto;
  height: 48vh;
  object-fit: cover;
  width: 100%;
  @media (min-width: 900px) {
    height: 91vh;
  }
`

const HeaderContainer = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  color: #4189c8;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  width: 100vw;
  @media (min-width: 900px) {
    width 60vw;
    position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  > div {
    font-size: 7vw;
    font-weight: 400;
    @media (min-width: 900px) {
      font-size: 4vw;
    } 
  }
  > h1 {
    font-size: 11vw;
    margin-bottom: 0;
    @media (min-width: 900px) {
      font-size: 7vw;
    } 
  
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>The Mason Clinic</h1>
      <div>Complementary Healthcare</div>
    </HeaderContainer>
    <Hero src={hero} alt="Hands on back" />
  </HeaderWrapper>
)

export default Header
