import React from 'react'
import styled from 'styled-components'

const Burger = () => (
    <div>
        <input id="burger" type="checkbox" />
        <label for="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>
            <ul>
                <li>Homepage</li>
                <li>Therapies</li>
                <li>Contact Us</li>
                <li>Fees</li>
            </ul>
        </nav>
    </div>
)

export default Burger