import React from 'react';
import styled from 'styled-components';
import socialsleuth from '../../../illustrations/ss8.png';

const SeasonOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    width: 80%;
    img{
        width: 100px;
    }
`;

const StyledSluethPara = styled.p`
  margin: 2rem auto;
  border-bottom: 2px solid #ffd54d;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1rem;
`;

const SeasonOneHeader = styled.h2`
    font-size: 1.6rem;
    justify-self: space-around;
`;


const SeasonOne = () => {
    return (
        <SeasonOneContainer>
           <img src={socialsleuth} alt="Social Sleuths" />
           <SeasonOneHeader>Social Sleuths</SeasonOneHeader>
           <StyledSluethPara>
           In Season #1, kids explore the world of communities, about how relationships between people, artifacts, and ideas can be analyzed and interpreted through social network mapping. Kids will investigate and generate data maps of these relationships to help understand how people communicate and exchange information in any given setting, and even track down some critical power hubs that can bring massive social change through real world digital networks. Stay tuned for updates on the Social Sleuths!
           </StyledSluethPara>
        </SeasonOneContainer>
    )
}

export default SeasonOne;
