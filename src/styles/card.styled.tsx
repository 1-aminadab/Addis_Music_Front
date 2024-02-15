import styled, { keyframes } from "styled-components"
import { theme } from "../theme/customTheme"

export const MusicCard = styled.div`
  margin: 20px;
  padding:5px 3px;
  height:fit-content;
  display: flex;
  border-radius:10px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: fit-content;
  position:relative;
  background-color: ${({ theme }) => theme.colors.lightWhite }; 
  opacity:0.9;
  cursor:pointer;
  &:hover {
    opacity:1;
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingElement = styled.div<{rotate:boolean}>`
  width: 100px;
  height: 100px;
    animation: ${({rotate })=> rotate && rotateAnimation} 2s linear infinite; /* Apply the animation *
  &:hover{
    animation: ${rotateAnimation} 2s linear infinite; /* Apply the animation */
  }
`;