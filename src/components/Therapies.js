import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

import boy from '../images/boy.jpeg'

const TherapyBoy = styled.div`
  margin: 0 auto;
  width: 100vw;
  @media (min-width: 900px) {
    height: 400px;
    margin-right: 40px;
    order: 3;
  }
  @media (min-width: 1200px) {
    margin-right: 60px;
  }
  >img {
    height: 100%;
    object-fit: cover;  
    width: 100%;
  }
`

const TherapiesWrapper = styled.div`
    background: #4189c8;
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    @media (min-width: 900px) {
        align-items: center;
        flex-direction: row;
        padding: 40px 0;
    }
    @media (min-width: 1200px) {
        padding: 60px 0;
    }
    `
    
const TherapyList = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        margin-left: 40px;
        height: 400px;
        width: 250px;
    }
    @media (min-width: 1200px) {
        margin-left: 60px;
    }
    >h1 {
        border-bottom: 2px solid white;
        font-weight: 400;
        margin: 20px 10%;
        padding-bottom: 5px;
        @media (min-width: 900px) {
            margin: 0 0 20px 0;
        }
    }
`

const TherapyLink = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 5px 10%;
    @media (min-width: 900px) {
        margin: 3px 0;
    }
    >h2 {
        font-weight: 400;
        margin-left: 10px;
        margin-bottom: 5px;
        text-align: left;
        width: 300px;
    }
`

const TherapyBlurb = styled.div`
    font-size: 1.15rem;
    margin: 10px 10% 40px;
    text-align: left;
    @media (min-width: 900px) {
        font-size: 1.2rem;
        height: 400px;
        margin: 0 20px;
        max-width: 600px;
    }
    @media (min-width: 1200px) {
        font-size: 1.35rem;
        margin: 0 40px;
        width: 650px;
    }
`

const Therapies = () => (
    <TherapiesWrapper>
        <TherapyBoy>
            <img src={boy} alt="hands on boy's head" />
        </TherapyBoy>
        <TherapyList>
            <h1>Therapies</h1>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Osteopathy</h2>
            </TherapyLink>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Acupuncture</h2>
            </TherapyLink>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Podiatry</h2>
            </TherapyLink>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Homeopathy</h2>
            </TherapyLink>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Allergy testing</h2>
            </TherapyLink>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Reflexology</h2>
            </TherapyLink>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Chiropody</h2>
            </TherapyLink>
            <TherapyLink>
                <Icon size={25} icon={ arrowRightThin } />
                <h2>Sports & remedial massage</h2>
            </TherapyLink>
        </TherapyList>
        <TherapyBlurb>
            The Mason Clinic was established as an osteopathic practice in 1966. Named after its founding osteopath, Graham Mason, the clinic is now owned by Inga and Andrew. Qualified osteopaths themselves, they have developed The Mason Clinic into a leading centre for complementary therapy. Remaining true to its roots however, the clinic retains several resident osteopaths. Click on a therapy to find out more
        </TherapyBlurb>
    </TherapiesWrapper>
)

export default Therapies