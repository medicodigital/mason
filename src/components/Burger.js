import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BurgerWrapper = styled.div`
  input {
    display: none;
  }
  input + label {
    height: 20px;
    position: absolute;
    right: 4%;
    top: 3%;
    @media (min-width: 900px) {
      top: 4%;
    }
    width: 25px;
    z-index: 5;
    span {
      background: #fff;
      display: block;
      height: 2px;
      left: 0;
      margin-top: -1px;
      position: absolute;
      top: 50%;
      transition: 0.5s;
      width: 100%;
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
    height: 100px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
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
        top: 64px;
      }
      width: 100%;
      @media (min-width: 900px) {
        width: 23%;
      }
      > li {
        display: block;
        color: #fff;
        font-size: 2rem;
        font-weight: 100;
        min-height: 46px;
        opacity: 0;
        padding: 8px;
        transition: 0.5s;
        transition-delay: 0.5s;
        text-decoration: none;
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
      <span />
      <span />
      <span />
    </label>
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/#therapies">Therapies</Link>
        </li>
        <li>
          <Link to="/#contact">Find us</Link>
        </li>
        <li>
          <Link to="/#fees">Fees</Link>
        </li>
      </ul>
    </nav>
  </BurgerWrapper>
)

export default Burger
