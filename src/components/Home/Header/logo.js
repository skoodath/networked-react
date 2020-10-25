import React from 'react';
import styled from 'styled-components';
import networked from '../../../illustrations/NetworkEd.png';
import { device } from '../../../styles/device';

const Title = styled.div`
    position: absolute;
    display: block;
    margin: 0 auto;
    background: #fff;
    justify-self: center;
    width: 10rem;
    height: 10rem;
    z-index: 99;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
    border-radius: 50%;
    @media ${device.laptop}{
        width: 13rem;
        height: 13rem;
    }

    > img {
        display: block;
        width: 7rem;
        max-width: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media ${device.laptop}{
            width: 10rem;
            height: auto;
        }
    }
`;

const Logo = () => (
    <Title>
        <img src={networked} alt="networkED logo" />
    </Title>
)

export default Logo;
