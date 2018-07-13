import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

import andrewtemp from '../images/therapists/Screenshot 2018-05-09 21.51.17.png'


const OsteopathsWrapper = styled.div`
    align-items: center;
    background: #86aecf;
    color: #fff;
    display: flex;
    height: 55px;
    width: 100vw;
    > div {
        margin: 0 5%;
    }
    `
    
    const OsteopathsContainer = styled.div`
    input {
        display: none;
    }
    input + label {
        position: inherit;
        > div {
            margin-left: 5%;
        }
    }
    label {
        display:flex;
        width: 300px;
        :hover {
            cursor: pointer;
        }
        > p {
            font-size: 1.7rem;
            margin-left: 10px;
        }
    }
    input:checked + label {
    > div {
        transform: rotate(90deg); 
        transition: 0.5s;
    }
}
input ~ nav {
    height: 100px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 310px;
    transition: 0.5s;
    transition-delay: 0.5s;
    width: 100%;
    z-index: 3;
    > ul {
        padding: 0;
        right: 0;
        width: 100%;
        > li {
            background: #86aecf;
            display: block;
            color: #fff;
            opacity: 0;
            padding: 10px;
            transition: 0.5s;
            text-decoration: none;
        }
        
    }
}
input:checked ~ nav {
    height: 100%;
    > ul {
        > li {
            opacity: 1;
            transition: 0.5s;
        }
    }
}
`

const ImageHolder = styled.div`
    display: flex;
    font-size: 1.7rem;
    text-align: left;
    > img {
        height: 80px;
        margin-left: 15%;
        margin-right: 10px;
    }
`

const Osteopaths = () => (
    <OsteopathsWrapper>
        <OsteopathsContainer>
        <input id="osteos" type="checkbox" />
        <label htmlFor="osteos">
        <Icon size={25} icon={ arrowRightThin } />
        <p>Our osteopaths</p>
        </label>
        <nav>
            <ul>
                <li>
                    <ImageHolder>
                        <img src={andrewtemp} alt="Andrew headshot" />
                        <Link to="/">
                        Andrew<br></br>Allen
                        </Link>
                    </ImageHolder>
                </li>
                <li>
                    <ImageHolder>
                        <img src={andrewtemp} alt="Andrew headshot" />
                        Inga<br></br>Werthmann
                    </ImageHolder>
                </li>
                <li> 
                    <ImageHolder>
                        <img src={andrewtemp} alt="Andrew headshot" />
                        Vincent<br></br>Martino
                    </ImageHolder>
                </li>
                <li>
                    <ImageHolder>
                        <img src={andrewtemp} alt="Andrew headshot" />
                        Heloise<br></br>Gilleman
                    </ImageHolder>
                </li>
            </ul>
        </nav>
        </OsteopathsContainer>
    </OsteopathsWrapper>
)

export default Osteopaths