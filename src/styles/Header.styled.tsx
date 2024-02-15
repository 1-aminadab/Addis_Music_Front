import styled from "styled-components";
import { HeaderProps } from "../types/props.type";
import { theme } from "../theme/customTheme";
export const Header = styled.h1<HeaderProps>`
  font-size: ${({ size, theme }) => (size === 'large' ? theme.fontSizes.large : size === 'small' ? theme.fontSizes.small : size)};
  font-weight: ${({ size,weight }) => ((size === 'large' || size === 'small' ? 'bold' : weight))};
  color: ${({ color }) => color || '#333'};
  font-family: ${({theme})=>theme.fonts.body};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  width:${({width})=>width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;
