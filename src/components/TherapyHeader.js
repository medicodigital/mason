import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Burger from '../components/Burger'

const HeaderWrapper = styled.div`
  background: #4189c8;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 55px;
  width: 100vw;
  @media (min-width: 900px) {
    height: 80px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2%;
  z-index: 6;
  :hover {
    cursor: pointer;
  }
  h3 {
    font-size: 1.9rem;
    font-weight: 400;
    text-transform: capitalize;
    @media (min-width: 900px) {
      font-size: 2.5rem;
    }
  }
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 4%;
  top: 1%;
  z-index: 6;
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`

const TherapyHeader = props => (
  <HeaderWrapper>
    <NameContainer>
      <Link to="/">
        Mason<br />Clinic
      </Link>
    </NameContainer>
    <HeaderContainer>
      <Link to={`/${props.therapy}`}>
        <h3>{props.therapy}</h3>
      </Link>
    </HeaderContainer>
    <Burger />
  </HeaderWrapper>
)

export default TherapyHeader
