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
    padding: 20px;
    max-width: 100vw;
`

const WordsContainer = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        font-size: 10vw;
        font-weight: 300;
        margin: 0;
    }
    h1 {
        font-size: 13vw;
        font-weight: 600;
        margin: 0;
    }
`

const ImageContainer = styled.div`
    max-width: 38%;
    img {
        object-fit: cover;
    }
`

const AboutHolder = styled.div`
    display: flex;
    margin-top: 10px;
    p {
        font-size: 6vw;
        margin: 0 0 0 10px;
    }
`

const Therapist = (props) => (
    <TherapistWrapper>
        <WordsContainer>
            <h2>Therapist</h2>
            <h1>{props.firstname+" "+props.surname}</h1>
            <AboutHolder>
                <Icon size={25} icon={ arrowRightThin } />
                <p>About {props.firstname}</p>
            </AboutHolder>
        </WordsContainer>
        <ImageContainer>
            <img src={props.pic} alt="therapist headshot" />
        </ImageContainer>
    </TherapistWrapper>
) 

export default Therapist