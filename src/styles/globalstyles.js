import { createGlobalStyle } from 'styled-components';
import { device } from '../styles/device';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap");
* {
    
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  outline: none;
  text-decoration: none;
  line-height: 1.6;
  scroll-behavior: smooth;
  font-size: 12px;
  color: #272727;
  @media ${device.laptop}{
    font-size: 16px;
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