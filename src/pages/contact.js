import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import TherapyHeader from '../components/TherapyHeader'

const ContactWrapper = styled.div`
  background: #ddeaf6;
  display: grid;
  height: 100%;
  width: 100vw;
  place-items: center;
`

const Form = styled.form`
  align-items: center;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
  margin-top: 5vh;
  padding: 30px;
  width: 80vmin;
`

const Input = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
`
const Message = styled.textarea`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  height: 200px;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
`

const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 83vmin;
`

const Submit = styled.input`
  background: #86ab45;
  border-color: #86ab45;
  border-radius: 5px;
  border-style: outset;
  color: #fff;
  font: 1.5rem Lato, sans-serif;
  height: 50px;
  text-shadow: none;
  width: 30vmin;
  :hover {
    cursor: pointer;
  }
`

const HomeButton = styled.button`
  background: #4189c8;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 50px;
  font: 1.5rem Lato, sans-serif;
  padding: 10px;
  width: 30vmin;
  :hover {
    cursor: pointer;
  }
`

const Contact = () => (
  <ContactWrapper>
    <TherapyHeader therapy="Contact us" />
    <Form action="https://formspree.io/davidcooper974@gmail.com" method="POST">
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
