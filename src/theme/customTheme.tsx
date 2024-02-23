import { DefaultTheme } from 'styled-components';

// Define a theme interface for TypeScript
interface CustomTheme extends DefaultTheme {
  colors: {
    primaryBackground: string;
    secondaryBackground: string;
    white: string;
    lightGray: string;
    lightWhite: string;
    primary: string;
    secondary: string;
    lighter:string;
  };
  fonts: {
    body: string;
    heading: string;
    serif:string;
    mono:string;
    fancy:string;
    fancy2:string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    extraSmall: string;
    extraLarge: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    circle:string;
  };
  sizes:{
    navbarHeight:string;
    controllerHeight:string

  }
}

// Define your theme
export const theme: CustomTheme = {
  colors: {
    primaryBackground:"#121319",
    secondaryBackground:"#15151E",
    white:"#fff",
    lightGray:'#55555A',
    lightWhite:'#fff1',
    lighter:"#fff4",
    primary:'#008080',
    secondary:'#0d90EE'

  },
  fonts: {
    fancy:"'Agbalumo', system-ui",
    fancy2:"'Lobster', sans-serif",
    body: "'Roboto', sans-serif",
    heading: "'Open Sans', sans-serif",
    serif: "'Merriweather', serif",
    mono: "'Roboto Mono', monospace",
  },
  fontSizes: {
    small: "11px",
    medium: "15px",
    large: "20px",
    extraSmall: "12px",
    extraLarge: "24px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
    circle:"50%",
  },
  sizes:{
    navbarHeight:'70px',
    controllerHeight:'70px'
  }
};


