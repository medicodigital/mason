import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Icon from 'react-icons-kit'
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial'
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { arrowUpThin } from 'react-icons-kit/metrize/arrowUpThin'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const LinksWrapper = styled.div`
  align-items: center;
  background: inherit;
  border-bottom: 1px solid #ddeaf6;
  display: flex;
  justify-content: center;
  padding: 3% 0;
  width: 100vw;
  @media (min-width: 600px) {
    justify-content: center;
    padding: 5px 0;
  }
`
const LinksLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 600px) {
    margin: 0 40px;
  }
  @media (min-width: 350px) {
    margin: 0 25px;
  }
  > h2 {
    margin: 0;
    @media (min-width: 600px) {
      margin: 10px;
      font-size: 3vw;
      font-weight: 100;
    }
    @media (min-width: 900px) {
      font-size: 2vw;
    }
  }
  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
  }
`
const LinksRight = styled.div`
  color: #3b5998;
`

const IconHolder = styled.div`
  display: ${props => props.display};
`

const ContactHolder = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 25px;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
  h2 {
    margin-left: 5px;
    margin-bottom: 0;
    margin-right: 25px;
  }
`

const Links = () => (
  <LinksWrapper>
    <IconHolder display={'inline'}>
      <Icon onClick={scrollToTop} size={30} icon={arrowUpThin} />
    </IconHolder>
    <LinksLeft>
      <h2>
        <a href="tel:01634842583">01634 842583</a>
      </h2>
      <ContactHolder>
        <Icon size={30} icon={envelopeO} />
        <Link to="/contact">
          <h2>Contact us</h2>
        </Link>
      </ContactHolder>
    </LinksLeft>
    <LinksRight>
      <a href="https://www.facebook.com/The-Mason-Clinic-643641389021284/">
        <Icon size={50} icon={facebookOfficial} />
      </a>
    </LinksRight>
  </LinksWrapper>
)

export default Links
