import styled from 'styled-components';

export const PathwayWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 100%;
    height: 100%;
    border-top: 2px solid #ffd54d;
    padding: 0;
    margin: 0;
    position: relative;
    flex: 1;
`;
export const PathwayContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 1rem;
`;
export const PathwayImg = styled.img`
    display: block;
    height: 150px;
    padding: 1rem;
`;

export const PathwayText = styled.p`
    padding: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
`;

