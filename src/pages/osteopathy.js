import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import OurOsteopaths from '../components/OurOsteopaths'

import shoulders from '../images/osteoshoulders.jpeg'


const OsteopathyWrapper = styled.div`
    background: #ddeaf6;
    height: 100vh;
`

const Shoulders = styled.div`
    margin: 0 auto;
    width: 100%;
    >img {
    width: 100%;
    }
`

const OsteopathyPage = () => (
    <OsteopathyWrapper>
        <TherapyHeader />
        <Shoulders>
            <img src={shoulders} alt="treating shoulders" />
        </Shoulders>
        <OurOsteopaths />
        <Links />
    </OsteopathyWrapper>
)

export default OsteopathyPage