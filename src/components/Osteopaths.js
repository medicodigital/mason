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
label:hover {
    cursor: pointer;
}
input:checked + label {
    > div {
        transform: rotate(90deg); 
        transition: 0.5s;
    }
}
input ~ nav {
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 3;
    > ul {
        padding: 0;
        right: 0;
        text-align: center;
        width: 100%;
        > li {
            background: #86aecf;
            display: block;
            color: #fff;
            font-size: 1.25rem;
            font-weight: 100;
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

label {
    display:flex;
    width: 100vw
    > p {
        font-size: 1.7rem;
        margin-left: 10px;
    }
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
                <li>Andrew Allen</li>
                <li>Inga Werthmann</li>
                <li>Vincent Martino</li>
                <li>Heloise Gilleman</li>
                <li>Ben Rookledge</li>
            </ul>
        </nav>
        </OsteopathsContainer>
    </OsteopathsWrapper>
)

export default Osteopaths