import { ReactNode, MouseEvent } from 'react';

export interface CustomButtonProps {
  padding?: string;
  width?: string;
  text?:string;
  border?:string,
  gap?:string,
  index?:number,
  shape?:string,
  borderRadius?:string,
  backgroundColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  customStyles?: any;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface SearchInputProps{
placeholder?:string
border?:string
borderRadius?:string
customStyles?: any
}

export interface HeaderProps {
  size?:string;
  color?:string;
  margin?:string;
  padding?:string;
  animation?:boolean;
  weight?:string;
  width?:string;
  children?:ReactNode;
}

export interface ImageProp {
  src?:string | ReactNode;
  alt?:string;
  width?:string;
  height?:string;
  padding?:string;
  borderRadius?:string;
  objectFit?:string
}


