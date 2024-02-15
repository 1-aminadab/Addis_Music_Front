import React, { MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

// Define common button props
interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>
}

// Define common style
const buttonStyles = css<ButtonProps>`
  font-size: 16px;
  border: none;
  color: ${({ color }) => color || '#fff'};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#0056b3'};
  }
`;

// Define reusable button components with different styles
const LargeButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 15px 30px;
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
`;

const SmallButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
`;

const CircleButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
`;

const RectangleButton = styled.button<ButtonProps>`
  ${buttonStyles}
  padding: 12px 24px;
  border-radius: 3px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
`;

// Define props for the Button component
interface MainButtonProps extends ButtonProps {
  size?: 'large' | 'small';
  shape?: 'circle' | 'rectangle';
}

// Main Button component that handles different button types
const MainButton: React.FC<MainButtonProps> = ({
  size = 'large',
  shape = 'rectangle',
  backgroundColor,
  color,
  hoverBackgroundColor,
  children,
  onClick
}) => {
  let ButtonComponent: React.FC<ButtonProps>;
  switch (size) {
    case 'large':
      ButtonComponent = LargeButton;
      break;
    case 'small':
      ButtonComponent = SmallButton;
      break;
    default:
      ButtonComponent = LargeButton; // Default to large size
  }

  switch (shape) {
    case 'circle':
      ButtonComponent = CircleButton;
      break;
    case 'rectangle':
      ButtonComponent = RectangleButton;
      break;
    default:
      ButtonComponent = RectangleButton; // Default to rectangle shape
  }

  return (
    <ButtonComponent
      backgroundColor={backgroundColor}
      color={color}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default MainButton