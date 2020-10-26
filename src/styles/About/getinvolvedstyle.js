import styled from 'styled-components';
import { device } from '../device';

export const StyledGetInvolvedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media ${device.laptop}{
        flex-direction: row;
    }
`;

export const StyledInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 0;
    justify-content: center;

`;

export const StyledGetInvolved = styled.p`
width: 100%;
border-bottom: 3px solid #ffd54d;
margin: 0;
padding: 0 0 2rem 0;
letter-spacing: 2px;
line-height: 2;
font-size: 1.1em;
`;