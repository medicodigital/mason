import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import {facebookOfficial} from 'react-icons-kit/fa/facebookOfficial'

import Map from '../components/Map'

import clinic from '../images/clinic.jpeg'

const Clinic = styled.div`
    margin: 0 auto;
    width: 100%;
    >img {
        width: 100%;
    }
`

const ContactWrapper = styled.div`
    background: #86ab45;
    color: #fff;
    padding-bottom: 10px;
    text-align: center;
    >h1 {
        border-bottom: 2px solid white;
        font-weight: 400;
        margin: 20px 10%;
        padding-bottom: 5px;    
    }
    >h3 {
        font-weight: 400;
        margin: 5px 10%;
    }
`

const FacebookLink = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 10% 10px;
    >h3 {
        font-weight: 400;
        margin: 0 0 0 5px;
    }

`
const MapContainer = styled.div`
    color: #d80000;
    height: 50vh;
    margin: 0 auto;
    width: 80%;
`

const ContactBlurb = styled.div`
    color: #fff;
    font-size: 1.15rem;
    margin: 20px 10%;
    text-align: left;
`

const Contact = () => (
    <ContactWrapper>
        <Clinic>
            <img src={clinic} alt="Mason Clinic exterior" />
        </Clinic>
        <h1>Contact us</h1>
        <h3>The Mason Clinic,<br></br> The Hollies,<br></br> 1B Cornwallis Avenue, Chatham, Kent <br></br>ME4 6JT</h3>
        <h3>01634 842583</h3>
        <FacebookLink>
            <Icon size={ 35 } icon={ facebookOfficial } />
            <h3>Find us on Facebook</h3>
        </FacebookLink>
        <MapContainer>
            <Map />
        </MapContainer>
        <ContactBlurb>
            <p>A doctor’s referral is not necessary and you may be seen the day of your call. Appointments are usually from 8:30am to 5:30pm, but early and late appointments can be made by arrangement. We offer late appointments on Monday, Tuesday, Wednesday and Thursday as well as Saturday appointments.</p>
        </ContactBlurb>
    </ContactWrapper>
)

export default Contact