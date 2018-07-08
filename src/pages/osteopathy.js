import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'
import Osteopaths from '../components/Osteopaths'

import shoulders from '../images/osteoshoulders.jpeg'
import inganeck from '../images/inganeck.jpeg'


const OsteopathyWrapper = styled.div`
    background: #ddeaf6;
`

const ImageHolder = styled.div`
    margin: 0 auto;
    width: 100%;
    >img {
        max-height: 50vh;
        object-fit: cover;
        width: 100%;
    }
`

const BlurbHolder = styled.div`
    font-size: 1.2rem;
    margin: 5% 10%;
`

const BlurbHeader = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
`


const OsteopathyPage = () => (
    <OsteopathyWrapper>
        <TherapyHeader />
        <ImageHolder>
            <img src={shoulders} alt="treating shoulders" />
        </ImageHolder>
        <Osteopaths />
        <BlurbHolder>
            Our osteopaths adopt an holistic approach to patient care. We provide physical therapy that complements your body’s ability to heal naturally. Your internal organs, blood vessels, nerves and lymphatic system are supported by your musculo-skeletal system. Problems with one have an adverse effect on the other. That’s why social and psychological factors are important elements in our diagnosis since these impact health.
        </BlurbHolder>
        <Links />
        <ImageHolder>
            <img src={inganeck} alt="treating neck" />
        </ImageHolder>
        <BlurbHolder>
            <BlurbHeader>
                STRUCTURAL OSTEOPATHY
            </BlurbHeader>
            Structural osteopathy is the type of osteopathy most people are familiar with. It comprises a number of techniques such as muscle and connective tissue stretching, rhythmic joint movement, gentle release techniques and the occasional high thrust movement. It can cause the occasional cracking or popping noise but is generally painless.
        </BlurbHolder>
    </OsteopathyWrapper>
)

export default OsteopathyPage