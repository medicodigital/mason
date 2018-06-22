import React from 'react'
import styled from 'styled-components'

import bottles from '../images/bottles.jpeg'

const Bottles = styled.div`
    margin: 0 auto;
    width: 100%;
    >img {
        width: 100%;
    }
`

const FeesWrapper = styled.div`
    background: #276277;
    color: #fff;
    padding-bottom: 30px;
    text-align: center;
    width: 100vw;
    >h1 {
        border-bottom: 2px solid white;
        font-weight: 400;
        margin: 20px 10%;
        padding-bottom: 5px;    
    }
    >h3 {
        font-weight: 400;
        margin: 10px 10% 5px;
        text-align: left;
    }
    >p {
        margin: 0 10%;
    }
`

const FeesLine = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 10%;
    >p {
        margin: 0;
    }
`

const FeesBlurb = styled.div`
    margin: 5px 10% 0;
    text-align: left;
`

const Fees = () => (
    <FeesWrapper>
        <Bottles>
            <img src={ bottles } alt="bottles on shelf" />
        </Bottles>
        <h1>Fees</h1>
        <p>Please note we can provide gift vouchers for all of our treatments.</p>
        <h3>OSTEOPATHY</h3>
        <FeesLine>
            <p>First consultation</p>
            <p>£45</p>
        </FeesLine>
        <FeesLine>
            <p>Follow-up</p>
            <p>£40</p>
        </FeesLine>
        <FeesBlurb>First appointments are 30 to 45 minutes, while follow-up appointments are 30 minutes long.</FeesBlurb>
        <h3>ACUPUNCTURE</h3>
        <FeesLine>
            <p>New and continuing patients</p>
            <p>£45</p>
        </FeesLine>
        <h3>CHIROPODY/PODIATRY</h3>
        <FeesLine>
            <p>General treatment</p>
            <p>£38</p>
        </FeesLine>
        <h3>HOMEOPATHY</h3>
        <FeesLine>
            <p>Adult first consultation</p>
            <p>£65</p>
        </FeesLine>
        <FeesLine>
            <p>Adult follow-up</p>
            <p>£45</p>
        </FeesLine>
        <FeesLine>
            <p>Under-16 first consultation</p>
            <p>£50</p>
        </FeesLine>
        <FeesLine>
            <p>Under-16 follow-up</p>
            <p>£35</p>
        </FeesLine>
        <h3>ALLERGY TESTING</h3>
        <FeesLine>
            <p>Adult first consultation</p>
            <p>£85</p>
        </FeesLine>
        <FeesLine>
            <p>Adult follow-up</p>
            <p>£45</p>
        </FeesLine>
        <FeesLine>
            <p>Under-16 first consultation</p>
            <p>£65</p>
        </FeesLine>
        <FeesLine>
            <p>Under-16 follow-up</p>
            <p>£35</p>
        </FeesLine>
        <h3>REFLEXOLOGY</h3>
        <FeesLine>
            <p>60 minutes</p>
            <p>£45</p>
        </FeesLine>
        <h3>MASSAGE</h3>
        <FeesLine>
            <p>90 minutes</p>
            <p>£55</p>
        </FeesLine>
        <FeesLine>
            <p>60 minutes</p>
            <p>£45</p>
        </FeesLine>
        <FeesLine>
            <p>30 minutes</p>
            <p>£25</p>
        </FeesLine>
    </FeesWrapper>
)

export default Fees