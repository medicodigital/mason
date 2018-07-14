import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'

import andrewtemp from '../images/therapists/Screenshot 2018-05-09 21.51.17.png'

const TherapistWrapper = styled.div`
    background: #ddeaf6;
    height: 100%;
`

const ImageHolder = styled.div`
    margin: 20px auto;
    width: 60vw;
`

const BlurbHolder = styled.div`
    margin: 0 10%;
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

const TherapistAndrew = () => (
    <TherapistWrapper>
        <TherapyHeader />
        <ImageHolder>
            <img src={andrewtemp} alt="Andrew headshot" />
        </ImageHolder>
        <BlurbHolder>
            <h1>Andrew Allen</h1>
            <h3>BSc &#40;Hons&#41; Osteopathy, DO</h3>
            <p>Andrew Allen is co-owner of The Mason Clinic. Andrew studied at the European School of Osteopathy. The course was very varied and included cranial osteopathy, as well as traditional osteopathic procedures. Andrew is now involved in teaching at the ESO. Prior to Osteopathy, Andrew worked in Asia and the Middle East, inspiring him to work in the social environment and interact with others at many levels.
            He is a yoga practitioner and understands the importance of self-awareness and motivation, which he hopes to import to his patients. He is also a keen wood worker and cyclist...when he has the time!</p>
        </BlurbHolder>
    </TherapistWrapper>
)

export default TherapistAndrew