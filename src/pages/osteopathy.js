import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Burger from '../components/Burger'

const OsteopathyWrapper = styled.div`
    background: #ddeaf6;
    height: 100vh;
`

const OsteopathyPage = () => (
    <OsteopathyWrapper>
        <h1>Osteopathy</h1>
        <Burger />
    </OsteopathyWrapper>
)

export default OsteopathyPage