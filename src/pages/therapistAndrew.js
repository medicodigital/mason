import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import andrew from '../images/therapists/andrew-headshot.jpeg'

const TherapistWrapper = styled.div`
    background: #ddeaf6;
    display: flex;
    flex-direction: column;
    height: 100%;
`
const ImageBlurbContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
        order: 2;
        padding: 5vh 10vw;
    }
    @media (min-width: 900px) {
        align-items: center;
        flex-direction: row;
        justify-content: center;
        padding: 10vh 10vw;
    }
    `
    
const ImageHolder = styled.div`
    align-self: flex-start;
    margin: 20px auto;
    width: 60vw;
    > img {
        width: 100%;
    }
    @media (min-width: 900px) {
        margin: 0 20px 0 0;
        width: 30%;
    }
`

const BlurbHolder = styled.div`
    margin: 0 10%;
    @media (min-width: 600px) {
        margin: 0;
    }
    @media (min-width: 900px) {
        max-width: 30vw;
    }
    > h1, h3 {
        margin: 0;
        text-align: center;
    }
    > h1 {
        font-weight: 700;
    }
    > h3 {
        font-weight: 400;
    }
`

const StickyHolder = styled.div`
    background: #86aecf;
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 1;
    @media (min-width: 600px) {
        order: 1;
    }
`

const TherapistAndrew = () => (
    <TherapistWrapper>
        <TherapyHeader 
            therapy="Osteopathy"
            link="osteopathy"
            />
        <ImageBlurbContainer>
            <ImageHolder>
                <img src={andrew} alt="Andrew headshot" />
            </ImageHolder>
            <BlurbHolder>
                <h1>Andrew Allen</h1>
                <h3>BSc &#40;Hons&#41; Osteopathy, DO</h3>
                <p>Andrew Allen is co-owner of The Mason Clinic. Andrew studied at the European School of Osteopathy. The course was very varied and included cranial osteopathy, as well as traditional osteopathic procedures. Andrew is now involved in teaching at the ESO.</p>
                <p> Prior to Osteopathy, Andrew worked in Asia and the Middle East, inspiring him to work in the social environment and interact with others at many levels.
                He is a yoga practitioner and understands the importance of self-awareness and motivation, which he hopes to import to his patients. He is also a keen wood worker and cyclist...when he has the time!</p>
            </BlurbHolder>
        </ImageBlurbContainer>
        <StickyHolder>
            <Links />
        </StickyHolder>
    </TherapistWrapper>
)

export default TherapistAndrew