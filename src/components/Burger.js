import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BurgerWrapper = styled.div`
    input {
        display: none;
    }
    input + label {
        position: fixed;
        top: 40px;
        right: 40px;
        height: 20px;
        width: 25px;
        z-index: 5;
        span {
            position: absolute;
            width: 100%;
            height: 2px;
            top: 50%;
            margin-top: -1px;
            left: 0;
            display: block;
            background: black;
            transition: 0.5s;
        }
        span:first-child {
            top: 3px;
        }
        span:last-child {
            top: 16px;
        }
    }
    label:hover {
        cursor: pointer;
    }
    input:checked + label {
        span {
            opacity: 0;
            top: 50%;
        }
        span:first-child {
            opacity: 1;
            transform: rotate(45deg);
        }
        span:last-child {
            opacity: 1;
            transform: rotate(-45deg); 
        }
    }
    input ~ nav {
        // background: white;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        z-index: 3;
        transition: 0.5s;
        transition-delay: 0.5s;
        overflow: hidden;
        > ul {
            text-align: center;
            position: absolute;
            padding: 0;
            top: 10%;
            width: 100%;
            > li {
                opacity: 0;
                transition: 0.5s;
                transition-delay: 0.5s;
                text-decoration: none;
                color: white;
                font-weight: 100;
                font-size: 2rem;
                display: block;
                padding: 10px;
            }
            > li:first-child {
                background: #86aecf;
            }
            > li:nth-child(2) {
                background: #4189c8;
            }
            > li:nth-child(3) {
                background: #86ab45;
            }
            > li:nth-child(4) {
                background: #276277;
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

const Burger = () => (
    <BurgerWrapper>
        <input id="burger" type="checkbox" />
        <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/#therapies">Therapies</Link></li>
                <li><Link to="/#contact">Contact us</Link></li>
                <li><Link to="/#fees">Fees</Link></li>
            </ul>
        </nav>
    </BurgerWrapper>
)

export default Burger