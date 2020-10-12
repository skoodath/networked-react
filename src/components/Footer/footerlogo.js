import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterLogo = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  a {
    color: #fff;
    font-size: 2rem;
    &:visited {
      color: #fff;
    }
  }
`;

const Footerlogo = () => {
    return (
            <FooterLogo>
                <Link to="/">networkED.in</Link>
            </FooterLogo>
    )
}

export default Footerlogo;
