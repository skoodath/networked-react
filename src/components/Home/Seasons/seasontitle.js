import React from 'react';
import styled from 'styled-components';

const SeasonText = styled.div`
  width: 100%;
  background: #ffd54d;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

const NameYearText = styled.h2`
    margin: 0 0 1rem;
    font-size: 1.3rem;
`;
const SeasonOne = styled.h3`
  font-size: 1.2rem;
`;

const SeasonTitle = () => {
    return (
        <SeasonText>
            <NameYearText>networkED 2020</NameYearText>
            <SeasonOne>Season One</SeasonOne>
        </SeasonText>
    )
}

export default SeasonTitle;

