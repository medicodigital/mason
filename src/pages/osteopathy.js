import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'

const OsteopathyWrapper = styled.div`
    background: #ddeaf6;
    height: 100vh;
`

const OsteopathyPage = () => (
    <OsteopathyWrapper>
        <TherapyHeader />
    </OsteopathyWrapper>
)

export default OsteopathyPage