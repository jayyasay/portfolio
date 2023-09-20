import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body:hover {
    background-color: rgba(0, 0, 0, 0.7);  // Change to any color and opacity you want
    transition: background-color 0.3s ease;  // Optional: Add a transition for a smooth effect
  }
`;

export default GlobalStyle;