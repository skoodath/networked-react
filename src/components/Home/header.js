
import React from 'react';
import styled from "styled-components";
import Logo from './Header/logo';

const Wrapper = styled.header`
    padding: 0;
    background: transparent;`;

const Header = () => {
    return (
        <Wrapper>
            <Logo />
        </Wrapper>
    )
}

export default Header;

