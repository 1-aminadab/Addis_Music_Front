import styled from "styled-components";
import { CustomButtonProps } from "../types/props.type";

export const Button = styled.button<CustomButtonProps>`
  padding: ${({ padding }) => padding || '10px 10px'};
  width: ${({ width }) => width || '' };
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
  color: ${({ color }) => color || '#fff'};
  border: ${({border})=>border};
  borderRadius: ${(borderRadius)=>borderRadius};
  cursor: pointer;
  display:flex;
  align-items:center;
  gap:${({gap})=> gap || '10px'} ;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    opacity:0.9;
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor };
    color: ${({ hoverTextColor }) => hoverTextColor || '#fff'};
  }
  ${({ customStyles }) => customStyles && customStyles};

`

export const CircleButton = styled(Button)`
border-radius:50%
`