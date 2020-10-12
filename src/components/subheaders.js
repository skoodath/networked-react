import React from 'react';
import styled from 'styled-components';
import underline from '../illustrations/underline.png';

const Header = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  align-self: center;
  font-size: 3rem;
  letter-spacing: 3px;
  width: 80%;
  padding: 0;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: url(${underline});
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;
  }
  span{
    font-weight: normal;
  }
`;


const SubHeader = ({text, smalltext}) => {
    return (
    <Header>
      <span>
        {smalltext}
      </span>
        <br />
      {text}
    </Header>
    )
}

export default SubHeader;
