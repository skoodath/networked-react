import React from 'react';
import styled from 'styled-components';

const SubTextPara = styled.p`
  line-height: 2;
  letter-spacing: 2px;
  width: 80%;
  margin: 5rem auto 2rem;
  border-top: 1px solid #ffde70;
  border-bottom: 1px solid #ffde70;
  padding: 2rem 0;
  font-size: 1.3rem;
  font-weight: 700;

`;

const SubText = ( {text} ) => {
    return (
    <SubTextPara>{text}</SubTextPara>
    )
}

export default SubText;
