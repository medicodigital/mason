import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowUpThin } from 'react-icons-kit/metrize/arrowUpThin'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const FooterWrapper = styled.div`
    align-items: center;
    background: #142c14;
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 5% 5%;
    >p {
        font-size: 10px;
        margin: 0;
    }
`

const WhiteWrapper = styled.div`
    color: #fff;
`

const Footer = () => (
    <FooterWrapper>
        <p>&copy; The Mason Clinic 2018</p>
        <AnchorLink offset="100" href="#top">
            <WhiteWrapper>
                <Icon size={25} icon={arrowUpThin} />
            </WhiteWrapper>
        </AnchorLink>
        <p>Made with &hearts; by Big Tent</p>
        <p>PRIVACY STATEMENT</p>
    </FooterWrapper>
)

export default Footer