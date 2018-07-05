import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'


const OurOsteopathsWrapper = styled.div`
    align-items: center;
    background: #86aecf;
    color: #fff;
    display: flex;
    height: 55px;
    justify-content: flex-start;
    width: 100vw;
    > div {
        font-size: 2rem;
        font-weight: 400;
        @media (min-width: 900px) {
            font-size: 2.5rem;
        }
    }
`

const OurOsteopaths = () => (
    <OurOsteopathsWrapper>
        <Icon size={27} icon={ arrowRightThin } />
        <div>Our osteopaths</div>
    </OurOsteopathsWrapper>
)

export default OurOsteopaths