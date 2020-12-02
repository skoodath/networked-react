import styled from 'styled-components';
import { Link } from 'react-scroll';


export const CTAButton = styled(Link)`
    outline: none;
    border: none;
    background-color: ${({bgColor})=> bgColor? '#ffd54d' : '#fff' };
    padding: 0.5rem 1rem;
    width: 10rem;
    border-radius: 5px;
    color: #272727;
    border: 2px solid #ffd54d;
    margin: 0 0 0 10%;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;