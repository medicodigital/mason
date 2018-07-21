import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Therapist from '../components/Therapist'

import acupuncture from '../images/acupuncture.jpg'
import renate from '../images/renate.jpg'


const AcupunctureWrapper = styled.div`
    background: #ddeaf6;
    display: flex;
    flex-direction: column;
    margin: 0;
`

const ImageHolder = styled.div`
    margin: 0 auto;
    width: 100%;
    @media (min-width: 600px) {
        max-width: 60%;
        margin-top: 7vh;
    }
    >img {
        max-height: 50vh;
        object-fit: cover;
        width: 100%;
        @media (min-width: 900px) {
            min-height: 270px;
        }
    }
`

const BlurbHolder = styled.div`
    font-size: 1.2rem;
    margin: 0 10%;
    padding: 5% 0;
    @media (min-width: 600px) {
        margin: 0 auto;
        max-width: 60%;
        padding: 2% 0;
    }
`

const StickyHolder = styled.div`
    background: #86aecf;
    color: #fff;
    // order: 0;
    position: sticky;
    top: 0;
    z-index: 1;
    // @media (min-width: 600px) {
    //     order: 1;
    //     }
`

const AcupuncturePage = () => (
    <AcupunctureWrapper>
        <TherapyHeader 
            therapy="Acupuncture"
            />
        <ImageHolder>
            <img src={acupuncture} alt="acupuncture" />
        </ImageHolder>
        <Therapist 
            firstname="Renate"
            surname="Blacker" 
            pic={renate}
            />
        <BlurbHolder>
            Over the past 20 years acupuncture has risen to the forefront of alternative therapies and is a key treatment practised here in The Mason Clinic. Firmly established in the West, it is used to treat a wide variety of conditions – not only physical problems and injuries, but also problems associated with stress such as chronic headaches and allergies. Acupuncture is also core to the Zita West fertility programme which we are proud to be affiliated to.
        </BlurbHolder>
        <StickyHolder>
            <Links />
        </StickyHolder>
        <BlurbHolder>
            Practised successfully for thousands of years, acupuncture is a traditional branch of Chinese medicine. The Chinese adopted an holistic approach to medicine, believing the body works as a balanced structure. Anything causing an imbalance would create disharmony in the energy flow so causing ill-health. Working through a complex system of channels or meridians, acupuncture is said to work by re-balancing the Qi (Chee) i.e. the energy flow.
        </BlurbHolder>
    </AcupunctureWrapper>
)

export default AcupuncturePage