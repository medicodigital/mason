import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

const TherapistWrapper = styled.div`
    background: #86aecf;
    color: #fff;
    display: flex;
    margin: 0 auto;
    width: 100vw;
`

const Therapist = (props) => (
    <TherapistWrapper>
        <h2>Therapist</h2>
        <h1>{props.name}</h1>
        <img src={props.pic} alt="therapist headshot" />
    </TherapistWrapper>
) 

export default Therapist