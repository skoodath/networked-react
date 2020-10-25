import React from 'react';
import styled from 'styled-components';

const PathwayWrap = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    min-width: 95%;
    border-top: 2px solid #ffd54d;
    padding: 0 1.5rem;
    margin: 1rem;
    position: relative;
    flex: 1;
`;
const PathwayContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1rem;
`;
const PathwayImg = styled.img`
    display: block;
    width: 100px;
    height: 100%;
    padding: 1rem;
`;

const PathwayText = styled.p`
    padding: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
`;


const Pathway = ({pathwayStep}) => {
    const {alt, image, text} = pathwayStep;

    return (
            <PathwayWrap>
                    <PathwayContentWrap>
                        <PathwayImg src={image} alt={alt} />
                        <PathwayText >
                            {text}
                        </PathwayText>
                    </PathwayContentWrap>
            </PathwayWrap>

    )
}

export default Pathway;
