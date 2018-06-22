import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import {facebookOfficial} from 'react-icons-kit/fa/facebookOfficial'

const LinksWrapper = styled.div`
    align-items: center;
    background: #ddeaf6;
    display: flex;
    justify-content: space-around;
    padding: 3% 0;
    width: 100vw;
    @media (min-width: 900px) {
        justify-content: center;
        padding: 5px 0;
    }
`
const LinksRight = styled.div`
    color: #3B5998;
`
const LinksLeft = styled.div`
    display: flex;
    flex-direction: column;
    > h2, h4 {
        margin: 0;
        @media (min-width: 900px) {
            margin: 10px;
            font-size: 2vw;
            font-weight: 100;
        }
    }
    > h4 {
        margin-top: 5px;
    }
    @media (min-width: 600px) {
        align-items: baseline;
        flex-direction: row;
    }
`

const Links = () => (
    <LinksWrapper>
        <LinksLeft>
            <h2><a href="tel:01634842583">01634 842583</a></h2>
            <h4><a href="mailto:enquiries@masonclinic.co.uk">enquiries@masonclinic.co.uk</a></h4>
        </LinksLeft>
        <LinksRight>
        <a href="https://www.facebook.com/The-Mason-Clinic-643641389021284/">
            <Icon size={50} icon={ facebookOfficial } />
        </a>
        </LinksRight>
    </LinksWrapper>
)

export default Links