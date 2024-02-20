import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  border: none;
  background: none;
  color: #007bff;
  cursor: pointer;
`;

export const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post('LOGIN_ENDPOINT', { username });
        console.log('Login successful:', response.data);
      } else {
        const response = await axios.post('SIGNUP_ENDPOINT', { username });
        localStorage.setItem('userData', JSON.stringify(response.data));
        console.log('Sign up successful:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>
        <ToggleButton onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </ToggleButton>
      </FormContainer>
    </Container>
  );
};
