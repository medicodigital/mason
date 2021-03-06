import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Icon from 'react-icons-kit'
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial'
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
  color: ${props => props.color};
  display: flex;
  justify-content: space-between;
  padding: 3% 0;
  width: 100vw;
  @media (min-width: 600px) {
    justify-content: space-between;
    padding: 5px 0;
  }
`
const LinksLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  @media (min-width: 600px) {
    align-items: center;
    flex-direction: row;
    min-width: 30vw;
  }
`

const LinksRight = styled.div`
  color: #3b5998;
  margin-right: 15px;
`

const IconHolder = styled.div`
  display: ${props => props.display};
  margin-left: 15px;
`

const ContactHolder = styled.div`
  border: 2px solid ${props => props.color};
  border-radius: 7px;
  padding: 4px 15px;
  min-width: 200px;
  margin: 3px 5px;
  @media (min-width: 600px) {
    :hover {
      background: #4189c8;
      border-color: #4189c8;
      color: #fff;
    }
  }
  @media (max-width: 400px) {
    min-width: 100px;
    h2 {
      font-size: 1.3rem;
    }
  }
  h2 {
    margin-bottom: 0;
  }
`

const Links = () => (
  <LinksWrapper color="inherit">
    <IconHolder display={'inline'}>
      <Icon onClick={scrollToTop} size={30} icon={arrowUpThin} />
    </IconHolder>
    <LinksLeft>
      <ContactHolder>
        <a href="tel:01634842583">
          <h2>01634 842 583</h2>
        </a>
      </ContactHolder>
      <ContactHolder>
        <Link to="/contact">
          <h2>Message us</h2>
        </Link>
      </ContactHolder>
      <ContactHolder>
        <a href="mailto:enquiries@masonclinic.co.uk">
          <h2>enquiries@masonclinic.co.uk</h2>
        </a>
      </ContactHolder>
    </LinksLeft>
    <LinksRight>
      <a
        href="https://www.facebook.com/The-Mason-Clinic-643641389021284/"
        alt="link to Facebook page"
      >
        <Icon size={50} icon={facebookOfficial} />
      </a>
    </LinksRight>
  </LinksWrapper>
)

export default Links
