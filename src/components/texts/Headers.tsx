import styled from "styled-components";
import React from "react";
import { HeaderProps } from "../../types/props.type";

import { Header } from "../../styles/Header.styled";

export const CustomHeader:React.FC<HeaderProps> = ({width, animation, size, color, margin,weight, padding, children }) => {
    return <Header animation={animation} width={width} size={size} color={color} margin={margin} weight={weight} padding={padding}>{children}</Header>;
  };