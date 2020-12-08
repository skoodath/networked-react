import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../device';


export const CTAButton = styled(Link)`
    outline: none;
    border: none;
    background-color: ${({bgColor})=> bgColor? '#ffd54d' : '#fff' };
    padding: 0.3rem 1rem;
    width: 150px;
    border-radius: 5px;
    color: #ffd54d;
    border: 2px solid #ffd54d;
    margin: 1rem 0 0 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    @media ${device.laptop}{
        width: 200px;
    }
`;