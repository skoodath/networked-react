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
    color: #002cbc;
    border: 2px solid #002cbc;
    margin: 1rem 0 0 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @media ${device.laptop}{
        width: 200px;
    }
`;
