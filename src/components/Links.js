import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import {facebookOfficial} from 'react-icons-kit/fa/facebookOfficial'
import { arrowUpThin } from 'react-icons-kit/metrize/arrowUpThin'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const LinksWrapper = styled.div`
    align-items: center;
    background: inherit;
    display: flex;
    justify-content: center;
    padding: 3% 0;
    width: 100vw;
    @media (min-width: 600px) {
        justify-content: center;
        padding: 5px 0;
    }
`
const LinksLeft = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 7px;
    @media (min-width: 600px) {
        margin: 0 40px;
    }
    @media (min-width: 350px) {
        margin: 0 25px;
    }
    > h2, h4 {
        margin: 0;
        @media (min-width: 600px) {
            margin: 10px;
            font-size: 2.5vw;
            font-weight: 100;
        }
        @media (min-width: 900px) {
            font-size: 2vw;
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
const LinksRight = styled.div`
    color: #3B5998;
`

const Links = () => (
    <LinksWrapper>
        <Icon onClick={scrollToTop} size={30} icon={arrowUpThin} />
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