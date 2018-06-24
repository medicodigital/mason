import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowUpThin } from 'react-icons-kit/metrize/arrowUpThin'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const FooterWrapper = styled.div`
    background: #142c14;
    color: #fff;
    // display: flex;
    margin: 0 auto;
    max-height: 50px;
    padding: 15px 0;
    `
    
const FirstLine = styled.div`
    align-items: center;
    display: flex;
    font-size: 10px;
    justify-content: space-between;
    margin: 0 10%;
    > p {
        margin: 0;
    }
    @media (min-width: 600px) {
        font-size: 12px;
    }
    `
const SecondLine = FirstLine.extend`
    justify-content: flex-start;
    margin-top: 2px;
    `

const WhiteWrapper = styled.div`
    color: #fff;
    `

const Footer = () => (
    <FooterWrapper>
        <FirstLine>
            <p>&copy; The Mason Clinic 2018</p>
            <AnchorLink offset="100" href="#top">
                <WhiteWrapper>
                    <Icon size={25} icon={arrowUpThin} />
                </WhiteWrapper>
            </AnchorLink>
            <p>Made with &hearts; by Big Tent</p>
        </FirstLine>
        <SecondLine>
            <p>PRIVACY STATEMENT</p>
        </SecondLine>
    </FooterWrapper>
)

export default Footer