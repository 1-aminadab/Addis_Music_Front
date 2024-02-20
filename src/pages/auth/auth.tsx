import React, { useState } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin, userSignup } from '../../apis';
import AuthBg from '../../assets/light-logo.png'
import "./authCss.css"
import { theme } from '../../theme/customTheme';
import LoadingComponent from '../../components/loading/Loading';
import { useDispatch } from 'react-redux';
import { LoadingState } from '../../store/features/musicSlice';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100vw;
  //margin-left:10px
`;

const FormContainer = styled.div`

  padding: 30px;
  border-radius: 10px;

`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:${theme.colors.primaryBackground};
  font-size:20px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  outline: none;
  background:#fffc;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size:17px;
  &:hover {
   opacity:0.8;
   border:1px solid white;
      }
`;

const ToggleButton = styled.button`
  margin-top: 10px;
  border: none;
  background: none;
  color: ${theme.colors.primaryBackground};
  font-weight:bold;
  cursor: pointer;
`;

export const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(LoadingState(true))
    try {
      if (isLogin) {
        const response:AxiosResponse = await userLogin({username})
        console.log('Login successful:', response.data.user);
        // Show success toast notification
        toast.success('Login successful');
        localStorage.setItem('userData', JSON.stringify(response.data.user));
       
        dispatch(LoadingState(false))
        navigate('/')
      } else {
        const response:AxiosResponse = await userSignup({username})
          localStorage.setItem('userData', JSON.stringify(response.data.user));
          console.log('Sign up successful:', response.data.user);
        // Show success toast notification
        toast.success('Sign up successful');
        dispatch(LoadingState(false))
        navigate('/')
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error toast notification
      toast.error('Error occurred');
      dispatch(LoadingState(false))
    }
  };

  return (
    <Container className='container'>
    
      <div style={{position:"absolute", top:"20px", left:"20px" }}>
          <img style={{width:"200px"}} src={AuthBg} alt="" />
        </div>
      <FormContainer className="auth-cont">
      <div style={{position:"absolute", top:"5px", left:"5px" }}>
          <img style={{width:"100px"}} src={AuthBg} alt="" />
        </div>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e:any) => setUsername(e.target.value)}
          />
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>
        <ToggleButton onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </ToggleButton>
        <ToastContainer />
      </FormContainer>
    </Container>
  );
};
