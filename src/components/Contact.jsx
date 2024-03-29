import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from "./Map";
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between; 
  gap: 50px;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 25px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  padding: 7px;
  color: white;
  background-color: #da4ea2;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
`;

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_laim465', 'template_7y6cf9v', formRef.current, 'ih5FYuZsbIdUFbr1X')
      .then((result) => {
        console.log(result.text);
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Reset form fields
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setSuccess(false);
      });
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input
              placeholder='Name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              placeholder='Email'
              name='email'
              type='email'
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextArea
              placeholder='Message'
              name='message'
              rows={8}
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button type='submit'>Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon."
            }
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact;
