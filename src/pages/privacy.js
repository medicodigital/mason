import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'

const PrivacyWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const PrivacyPage = () => (
  <PrivacyWrapper>
    <TherapyHeader therapy="Privacy Statement" />
  </PrivacyWrapper>
)

export default PrivacyPage
