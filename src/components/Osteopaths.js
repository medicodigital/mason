import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

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
    > p {
        font-size: 1.5rem;
    }
`

const OsteopathsContainer = styled.div`
input {
    display: none;
}
input + label {
    position: inherit;
}
label:hover {
    cursor: pointer;
}
input:checked + label {
    transform: rotate(90deg); 
    }
}
input ~ nav {
    height: 100px;
    left: 0;
    overflow: hidden;
    position: fixed;
    transition: 0.5s;
    transition-delay: 0.5s;
    width: 100%;
    z-index: 3;
    > ul {
        position: absolute;
        padding: 0;
        right: 0;
        text-align: center;
        top: 38px;
        @media (min-width: 900px) {
            top: 63px;
        }
        width: 100%;
            @media (min-width: 900px) {
                width: 25%;
            }
        > li {
            background: #86aecf;
            display: block;
            color: #fff;
            font-size: 2rem;
            font-weight: 100;
            opacity: 0;
            padding: 10px;
            transition: 0.5s;
            transition-delay: 0.5s;
            text-decoration: none;
        }
        
    }
}
input:checked ~ nav {
    height: 100%;
    transition-delay: 0s;
    > ul {
        > li {
            opacity: 1;
            transition-delay: 0.5s;
        }
    }
}
`

const Osteopaths = () => (
    <OsteopathsWrapper>
        <OsteopathsContainer>
        <input id="osteos" type="checkbox" />
        <label htmlFor="osteos">
        <Icon size={25} icon={ arrowRightThin } />
        </label>
        <nav>
            <ul>
                <li>Andrew Allen</li>
                <li>Inga Werthmann</li>
                <li>Vincent Martino</li>
                <li>Heloise Gilleman</li>
                <li>Ben Rookledge</li>
            </ul>
        </nav>
        </OsteopathsContainer>
        <p>Our Osteopaths</p>
    </OsteopathsWrapper>
)

export default Osteopaths