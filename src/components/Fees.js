import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FeesWrapper = styled.div`
  background: #276277;
  color: #fff;
  padding: 40px 0;
  text-align: center;
  width: 100vw;
  @media (min-width: 900px) {
    padding: 80px 0;
  }
`

const FeesColumns = styled.div`
  > h1 {
    border-bottom: 2px solid white;
    font-weight: 400;
    margin: 0 10% 25px;
    padding-bottom: 5px;
  }
  h3 {
    font-weight: 400;
    margin: 10px 10% 5px;
    text-align: left;
  }
  > p {
    margin: 0 10%;
  }
  @media (min-width: 600px) {
    column-count: 2;
  }
`

const FeesLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
  > p {
    margin: 0;
  }
`

const FeesBlurb = styled.div`
  margin: 5px 10% 0;
  text-align: left;
`

const Fees = () => (
  <FeesWrapper>
    <FeesColumns>
      <h1>Fees</h1>
      <Link to="/osteopathy">
        <h3>OSTEOPATHY</h3>
      </Link>
      <FeesLine>
        <p>First consultation</p>
        <p>£45</p>
      </FeesLine>
      <FeesLine>
        <p>Follow-up</p>
        <p>£40</p>
      </FeesLine>
      <FeesBlurb>
        First appointments are 30 to 45 minutes, while follow-up appointments
        are 30 minutes long.
      </FeesBlurb>
      <Link to="/acupuncture">
        <h3>ACUPUNCTURE</h3>
      </Link>
      <FeesLine>
        <p>New and continuing patients</p>
        <p>£45</p>
      </FeesLine>
      <h3>HOMEOPATHY</h3>
      <FeesLine>
        <p>Adult first consultation</p>
        <p>£65</p>
      </FeesLine>
      <FeesLine>
        <p>Adult follow-up</p>
        <p>£45</p>
      </FeesLine>
      <FeesLine>
        <p>Under-16 first consultation</p>
        <p>£50</p>
      </FeesLine>
      <FeesLine>
        <p>Under-16 follow-up</p>
        <p>£35</p>
      </FeesLine>
      <Link to="/podiatry">
        <h3>CHIROPODY/PODIATRY</h3>
      </Link>
      <FeesLine>
        <p>General treatment</p>
        <p>£38</p>
      </FeesLine>
      <h3>ALLERGY TESTING</h3>
      <FeesLine>
        <p>Adult first consultation</p>
        <p>£85</p>
      </FeesLine>
      <FeesLine>
        <p>Adult follow-up</p>
        <p>£45</p>
      </FeesLine>
      <FeesLine>
        <p>Under-16 first consultation</p>
        <p>£65</p>
      </FeesLine>
      <FeesLine>
        <p>Under-16 follow-up</p>
        <p>£35</p>
      </FeesLine>
      <h3>REFLEXOLOGY</h3>
      <FeesLine>
        <p>60 minutes</p>
        <p>£45</p>
      </FeesLine>
      <h3>DEEP TISSUE MASSAGE</h3>
      <FeesLine>
        <p>30 minutes</p>
        <p>£30</p>
      </FeesLine>
      <FeesLine>
        <p>60 minutes</p>
        <p>£45</p>
      </FeesLine>
      <FeesBlurb>
        Please note we can provide gift vouchers for all of our treatments.
      </FeesBlurb>
    </FeesColumns>
  </FeesWrapper>
)

export default Fees
