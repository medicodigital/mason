import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

const AcupunctureWrapper = styled.div`
    background: #ddeaf6;
    display: flex;
    flex-direction: column;
    margin: 0;
`

const ImageHolder = styled.div`
    margin: 0 auto;
    width: 100%;
    @media (min-width: 600px) {
        max-width: 60%;
        margin-top: 7vh;
    }
    >img {
        max-height: 50vh;
        object-fit: cover;
        width: 100%;
        @media (min-width: 900px) {
            min-height: 270px;
        }
    }
`

const AcupuncturePage = () => (
    <AcupunctureWrapper>
        <TherapyHeader therapy="Acupuncture"/>
        <h1>Acupuncture</h1>
        <Links />
    </AcupunctureWrapper>
)

export default AcupuncturePage