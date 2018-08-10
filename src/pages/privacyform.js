import React from 'react'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'
import Links from '../components/Links'

const PrivacyFormWrapper = styled.div`
  background: #ddeaf6;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const PrivacyFormHolder = styled.div`
  margin: 20px;
  h3 {
    margin-bottom: 0;
  }
  p {
    margin-top: 5px;
    margin-bottom: 0;
  }
`

const StickyHolder = styled.div`
  background: #86aecf;
  color: #fff;
  order: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  @media (min-width: 600px) {
    order: 1;
  }
`

const PrivacyFormPage = () => (
  <PrivacyFormWrapper>
    <TherapyHeader therapy="Data privacy" />
    <PrivacyFormHolder>
      <h3>DATA SUBJECT ACCESS REQUEST FORM</h3>
      <p>
        You have a right to receive a copy of the data/information we hold about
        you or to authorise someone to act on your behalf. Please complete this
        form and provide proof of your identity. Your request will be processed
        within 30 calendar days on receipt of a fully completed request form
        with proof of identity.
      </p>
      <p>
        We require proof of your identity before we can disclose your personal
        data. Proof of your identity should include a copy of two documents such
        as your birth certificate, passport, driving licence, an official letter
        dated not older than 90 days to you at your address e.g. bank statement,
        recent utility bill or council tax bill. The documents should include
        your name, date of birth and current address. If you have changed your
        name, please supply relevant documents evidencing the change. No
        administration charge is applicable for your first request.
      </p>
      <p>SECTION ONE</p>
      <p>Name of Data Subject: </p>
      <p>Address:</p>
      <p>City:</p>
      <p>Postcode:</p>
      <p>Day time telephone number:</p>
      <p>Date of birth:</p>
      <p>
        If you are not the data subject and you are applying on behalf of
        someone else, please also fill in the extra details below.
      </p>
      <p>Your name: </p>
      <p>Address:</p>
      <p>City:</p>
      <p>Postcode:</p>
      <p>Day time telephone number:</p>
      <p>Date of birth:</p>
      <p>
        What is your relationship to the data subject? (e.g. parent, carer,
        legal representative)
      </p>
      <p>
        Please provide Letter of authority [ ] or copy of Lasting or Enduring
        Power of Attorney [ ] Evidence of parental responsibility [ ] or other
        formal information enclosed [ ]
      </p>
      <p>SECTION TWO</p>
      <p>
        I am enclosing two items from the following, one of which is
        photographic as proof of my identity:
      </p>
      <p>
        Birth certificate [ ] Driving Licence [ ] Passport [ ] An official
        letter to my address not older than 90 days [ ]
      </p>
      <p>DATA SUBJECT’S DECLARATION</p>
      <p>
        I certify that the information provided on this form is correct to the
        best of my knowledge and that I am the person to whom it relates. I
        understand that you are obliged to confirm proof of identity/authority
        and it may be necessary to obtain further information in order to comply
        with this subject access request.
      </p>
      <p>Name</p>
      <p>Signature</p>
      <p>Date</p>
      <p>ON BEHALF OF A DATA SUBJECT</p>
      <p>
        I confirm that I am legally authorised to act on behalf of the data
        subject. I understand that you are obliged to confirm proof of
        identity/authority and it may be necessary to obtain further information
        in order to comply with this subject access
      </p>
      <p>Name</p>
      <p>Signature</p>
      <p>Date</p>
      <p>PERSONAL INFORMATION REQUESTED</p>
      <p>
        Please indicate what information is sought and if possible any
        supporting details such as the year or the reason for the request:
      </p>
      <p>
        Warning: Anyone who unlawfully obtains or attempts to obtain data is
        guilty of a criminal offence and is liable to prosecution.
      </p>
      <p>DATA FORMAT</p>
      <p>[ ] Please send the information in electronic format</p>
      <p>[ ] I will collect the information in person</p>
      <p>[ ] I will go through the information with a member of staff</p>
      <p>
        Please be aware that if information is posted, we will take every care
        to ensure that it is addressed correctly. However, we cannot be held
        liable if the information is lost in the post or incorrectly delivered
        or opened by someone else in your household. Loss or incorrect delivery
        may cause you embarrassment or harm if the information comprises of
        special category data.
      </p>
      <p>Please send your completed form and proofs of identity to:</p>
      <p>The Mason Clinic</p>
      <p>1b Cornwallis Avenue</p>
      <p>Chatham, ME46JT</p>
      <p>enquiries@masonclinic.co.uk</p>
    </PrivacyFormHolder>
    <StickyHolder>
      <Links />
    </StickyHolder>
  </PrivacyFormWrapper>
)

export default PrivacyFormPage
