import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

import heloise from '../images/therapists/Héloïse-Gilleman-3.jpg'


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

const TherapistHeloise = () => (
    <TherapistWrapper>
        <TherapyHeader />
        <ImageBlurbContainer>
            <ImageHolder>
                <img src={heloise} alt="Heloise headshot" />
            </ImageHolder>
            <BlurbHolder>
                <h1>Héloïse Gilleman</h1>
                <h3>DO, MOst</h3>
                <p>Héloïse Gilleman trained at the European School of Osteopathy where she learnt a broad range of techniques to treat a variety of conditions.
                She loves talking to patients, working with them to get to the root cause of their condition  whilst advising on how to modify their lifestyle to prevent their condition re-occurring.</p>
                <p>During her osteopathic training she developed a particular interest in cranial, visceral and paediatric/obstetric osteopathy. She is currently training at The Osteopathic Centre for Children developing her knowledge across babies to teenagers as well as expectant mothers.</p>
                <p>In her spare time, Héloïse enjoys travelling, reading and horse riding.</p>
            </BlurbHolder>
        </ImageBlurbContainer>
        <StickyHolder>
            <Links />
        </StickyHolder>
    </TherapistWrapper>
)

export default TherapistHeloise