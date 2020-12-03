import { createGlobalStyle } from 'styled-components';
import { device } from '../styles/device';

const GlobalStyle = createGlobalStyle`
* {
    
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  text-decoration: none;
  line-height: 1.6;
  scroll-behavior: smooth;
  font-size: 14px;
  color: #272727;
  @media ${device.tablet}{
    font-size: 14px;
  }
  @media ${device.laptop}{
    font-size: 14px;
  }
  @media ${device.laptopLG}{
    font-size: 20px;
  }
}

body {
  font-family: "Montserrat", sans-serif;
}
`;

export default GlobalStyle;