import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

const OsteopathsWrapper = styled.div`
    align-items: center;
    background: #86aecf;
    color: #fff;
    display: flex;
    height: 55px;
    width: 100vw;
    > div {
        margin: 0 5%;
    }
    > p {
        font-size: 1.5rem;
    }
`

const Osteopaths = () => (
    <OsteopathsWrapper>
        <Icon size={25} icon={ arrowRightThin } />
        <p>Our Osteopaths</p>
    </OsteopathsWrapper>
)

export default Osteopaths