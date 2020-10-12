import React from 'react';
import styled from 'styled-components';

const PathwayWrap = styled.div`

`;
const PathwayImg = styled.div`

`;
const PathwayOverlay = styled.div`

`;


const Pathway = ({img, alt}) => {
    return (
        <PathwayWrap>
            <PathwayOverlay />
            <PathwayImg src={img} alt={alt} />
        </PathwayWrap>
    )
}

export default Pathway;
