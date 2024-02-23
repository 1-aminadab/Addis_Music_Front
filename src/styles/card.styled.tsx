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
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondaryBackground}, ${({ theme }) => theme.colors.primary + '55'});

  opacity:0.9;
  // box-shadow: 0 0 5px 0px ${({ theme }) => theme.colors.primary} ;
  border:1px solid ${({ theme }) => theme.colors.primary+'77'};
  cursor:pointer;
  transition:all 200ms;
  &:hover {
    opacity:1;
     background: linear-gradient(135deg,  ${({ theme }) => theme.colors.primary + '55'});
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

export const ListContainer = styled.div`
display:flex;
flex-direction:row;
align-items:flex-start;
flex-wrap:wrap;
height:fit-content;
width:100vw;
gap:10px;
`