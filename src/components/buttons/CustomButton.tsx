import React from 'react';
import styled from 'styled-components';
import { CustomButtonProps } from '../../types/props.type';
import { Button, CircleButton } from '../../styles/Button.styled';

const CustomButton: React.FC<CustomButtonProps> = ({
  padding,
  width,
  border,
  backgroundColor,
  hoverBackgroundColor,
  hoverTextColor,
  customStyles,
  children,
  gap,
  index,
  text,
  shape,
  borderRadius,
  onClick,
  ...rest
}) => {
  if (shape === 'circle') {
    return (
      <CircleButton
        padding={padding}
        width={width}
        border={border}
        borderRadius={borderRadius}
        gap={gap}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverTextColor={hoverTextColor}
        customStyles={customStyles}
        onClick={onClick}
        {...rest}
      >
        {children ? children : text}
      </CircleButton>
    );
  } else {
    return (
      <Button
        padding={padding}
        width={width}
        border={border}
        borderRadius={borderRadius}
        gap={gap}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        hoverTextColor={hoverTextColor}
        customStyles={customStyles}
        onClick={onClick}
        {...rest}
      >
        {children ? children : text}
      </Button>
    );
  }
};

export default CustomButton;
