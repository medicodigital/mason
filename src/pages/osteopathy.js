import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Burger from '../components/Burger'

const OsteopathyPage = () => (
    <div>
        <h1>Osteopathy</h1>
        <Link to="/">
        <h4>Homepage</h4>
        </Link>
        <Burger />
    </div>
)

export default OsteopathyPage