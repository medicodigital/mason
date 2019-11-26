import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { arrowRightThin } from 'react-icons-kit/metrize/arrowRightThin'

import andrew from '../images/therapists/andrew-headshot.jpeg'
import inga from '../images/therapists/IngaWnov2018.jpg'
import vincent from '../images/therapists/vincent-martino.jpeg'
import ingaJ from '../images/therapists/ingaJ.jpeg'
import jo from '../images/therapists/josheppard.jpeg'

const OsteopathsWrapper = styled.div`
  align-items: center;
  background: #86aecf;
  color: #fff;
  display: flex;
  height: 55px;
  margin: 0 auto;
  position: relative;
  width: 100vw;
  @media (min-width: 600px) {
    max-width: 60%;
  }
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
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      margin-left: 5%;
    }
  }
  label {
    display: flex;
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
    left: 0;
    position: absolute;
    top: 35px;
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
        :last-of-type {
          padding-bottom: 20px;
        }
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
  img {
    height: 80px;
    margin-left: 15%;
    margin-right: 10px;
    object-fit: cover;
    width: 60px;
  }
`

const Osteopaths = () => (
  <OsteopathsWrapper>
    <OsteopathsContainer>
      <input id="osteos" type="checkbox" />
      <label htmlFor="osteos">
        <Icon size={25} icon={arrowRightThin} />
        <p>Our osteopaths</p>
      </label>
      <nav>
        <ul>
          <li>
            <ImageHolder>
              <img src={andrew} alt="Andrew headshot" />
              <Link to="/therapistAndrew">
                Andrew
                <br />
                Allen
              </Link>
            </ImageHolder>
          </li>
          <li>
            <ImageHolder>
              <img src={inga} alt="Inga headshot" />
              <Link to="/therapistInga">
                Inga
                <br />
                Allen
              </Link>
            </ImageHolder>
          </li>
          <li>
            <ImageHolder>
              <img src={vincent} alt="Vincent headshot" />
              <Link to="/therapistVincent">
                Vincent
                <br />
                Martino
              </Link>
            </ImageHolder>
          </li>
          <li>
            <ImageHolder>
              <img src={ingaJ} alt="IngaJ headshot" />
              <Link to="/therapistIngaJ">
                Inga
                <br />
                Jakubovskaja
              </Link>
            </ImageHolder>
          </li>
          <li>
            <ImageHolder>
              <img src={jo} alt="Jo headshot" />
              <Link to="/therapistJo">
                Jo
                <br />
                Sheppard
              </Link>
            </ImageHolder>
          </li>
        </ul>
      </nav>
    </OsteopathsContainer>
  </OsteopathsWrapper>
)

export default Osteopaths
