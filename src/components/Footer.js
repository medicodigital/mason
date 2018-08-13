import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import io from '../images/io.jpg'

const FooterWrapper = styled.div`
  background: #142c14;
  color: #fff;
  margin: 0 auto;
  max-height: 50px;
  padding: 15px 0;
`

const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  margin: 0 5%;
  > p {
    margin: 0;
    min-width: 120px;
  }
  @media (min-width: 600px) {
    font-size: 12px;
  }
`
const RightLink = styled.div`
  text-align: right;
  min-width: 120px;
`

const IoLogo = styled.img`
  background: #fff;
  max-height: 50px;
`

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <p>
        &copy; The Mason Clinic 2018
        <br />
        <Link to="/privacy">PRIVACY STATEMENT</Link>
      </p>
      <IoLogo src={io} />
      <RightLink>
        <p>
          <a href="https://www.bigtent.media">Made with &hearts; by Big Tent</a>
        </p>
      </RightLink>
    </FooterContainer>
  </FooterWrapper>
)

export default Footer
