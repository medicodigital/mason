import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowUpThin } from 'react-icons-kit/metrize/arrowUpThin'

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const FooterWrapper = styled.div`
    background: #142c14;
    color: #fff;
    margin: 0 auto;
    max-height: 50px;
    padding: 15px 0;
    `
    
const FooterContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    margin: 0 5%;
    > p {
        margin: 0;
        min-width: 120px;
    }
    @media (min-width: 600px) {
        font-size: 12px;
    }
    `
const RightLink = styled.div`
    text-align: right;
    min-width: 120px;
    `

const WhiteWrapper = styled.div`
    color: #fff;
    `

const Footer = () => (
    <FooterWrapper>
        <FooterContainer>
            <p>&copy; The Mason Clinic 2018
                <br></br>PRIVACY STATEMENT
            </p>
                <WhiteWrapper>
                    <Icon onClick={scrollToTop} size={35} icon={arrowUpThin} />
                </WhiteWrapper>
            <RightLink>
                <p>Made with &hearts; by Big Tent</p>
            </RightLink>
        </FooterContainer>
    </FooterWrapper>
)

export default Footer