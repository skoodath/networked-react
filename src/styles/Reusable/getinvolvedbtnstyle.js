import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../device';


export const CTAButton = styled(Link)`
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0.3rem 1rem;
    width: 150px;
    border-radius: 5px;
    color: #FFC91A;
    border: 2px solid #FFC91A;
    margin: 1rem 0 0 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    &:hover{
        background-color: #FFC91A;
        color: #fff;
        transition: background-color 0.8s cubic-bezier(0.215, 0.610, 0.355, 1);
    }
    @media ${device.laptop}{
        width: 200px;
    }
`;
