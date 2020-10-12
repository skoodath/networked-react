import React from 'react';
import styled from 'styled-components';

const Header = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  align-self: center;
  font-size: 2rem;
  letter-spacing: 3px;
  width: 80%;
  padding: 0;
  margin: 0 0 2rem 0;
  position: relative;

`;


const SectionHeader = ({text}) => {
    return (
    <Header>
      {text}
    </Header>
    )
}

export default SectionHeader;