import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'

const ContactWrapper = styled.div`
  display: grid;
  margin-bottom: 10vh;
  width: 100vw;
  place-items: center;
`

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  width: 70vmin;
`

const Input = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
`
const Message = styled.textarea`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  height: 200px;
  margin-bottom: 20px;
  padding: 5px;
  width: 100%;
`

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70vmin;
`

const Submit = styled.input`
  background: #86ab45;
  border-color: #86ab45;
  border-style: outset;
  color: #fff;
  font: 1.5rem Lato, sans-serif;
  height: 50px;
  margin-bottom: 20px;
  text-shadow: none;
  width: 30vmin;
`

const HomeButton = styled.button`
  background: #4189c8;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 50px;
  font: 1.5rem Lato, sans-serif;
  padding: 10px;
  width: 30vmin;
`

const Contact = () => (
  <ContactWrapper>
    <TherapyHeader therapy="Contact us" />
    <Form action="https://formspree.io/inga_werthmann@yahoo.de" method="POST">
      <Input type="text" name="name" placeholder="Your name" />
      <Input type="email" name="_replyto" placeholder="Your email address" />
      <Message type="message" name="message" placeholder="Your message" />
      <ButtonHolder>
        <Submit type="submit" value="Send" />
        <Link to="/">
          <HomeButton>Back</HomeButton>
        </Link>
      </ButtonHolder>
    </Form>
  </ContactWrapper>
)

export default Contact
