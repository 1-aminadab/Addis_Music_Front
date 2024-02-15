import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme/customTheme';
const GlobalStyle = createGlobalStyle`
  /* Global styles */
  body {
    font-family:${({ theme }) => theme.fonts.body}; 
    background-color: #000103;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;