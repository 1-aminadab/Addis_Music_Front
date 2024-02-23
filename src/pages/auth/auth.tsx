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
  flex-direction:column;
  height: 100vh;
  width:100vw;
  background-color: ${theme.colors.primary} + cc;
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
  border: 2px solid #fff;
  border-radius: 5px;
  outline: none;
  background-color:#fff8;
  transition: background-color 0.3s ease; /* Adding transition for smoother hover effect */

  &:hover {
    background: #f0f0f0; /* Change background color on hover */
  }

  // &:focus {
  //   border-color: #007bff; /* Change border color on focus */
  //   box-shadow: 0 0 5px 0.1rem ${theme.colors.primary}; /* Add box shadow on focus */
  // }
`;

const Button = styled.button`
  width: 100%;
  padding:7px 12px;
  background-color: ${theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 50px;
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
const CircularBentText = styled.div`
  display: inline-block;
  font-size: 40px;
  color: white;
  text-shadow: 2px 2px 15px ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.fancy2};

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
    <Container className='containerbox'>
    
      <div style={{position:"absolute", top:"20px", left:"20px" }}>
          <img style={{width:"200px"}} src={AuthBg} alt="" />
        </div>
        <CircularBentText>wellcome to the world of </CircularBentText>
        <div style={{fontSize:"15px",color:"white",textShadow:` 2px 2px 4px ${theme.colors.primary}`, fontFamily:`${theme.fonts.fancy2}`}}>our cherishing music</div>

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
