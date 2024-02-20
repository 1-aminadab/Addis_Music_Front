import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { RootState } from '../../store/store';

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LoaderContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const LoaderDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 5px;
  animation: ${moveUpDown} 1s ease-in-out infinite;
  &:nth-child(2) {
    animation-delay: 0.2s;
    background-color:blue;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
    background-color:green;
  }
`;

const LoadingComponent = () => {
    const {isLoading} = useSelector((store:RootState)=>store.songs)
   
  return (
    <LoaderContainer style={{display:`${isLoading ? 'flex': 'none'}`}}>
      <LoaderDot />
      <LoaderDot />
      <LoaderDot />
    </LoaderContainer>
  );
};

export default LoadingComponent;
