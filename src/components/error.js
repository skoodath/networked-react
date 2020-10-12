import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
const StyledErrorMessage = styled.h1`
    color: #ff0000;
`

const Error = () => {
    return(
        <StyledError>
            <StyledErrorMessage>Page not found! Please make sure the url is correct</StyledErrorMessage>
        </StyledError>
    )
}

export default Error;
