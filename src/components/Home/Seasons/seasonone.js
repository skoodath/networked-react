import React from 'react';
import styled from 'styled-components';
import socialsleuth from '../../../illustrations/ss8.png';

const SeasonOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    img{
        width: 100%;
    }
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
        </SeasonOneContainer>
    )
}

export default SeasonOne;
