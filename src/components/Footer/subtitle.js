import React from 'react';
import styled from 'styled-components';

const TitleName = styled.h5`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
`;

const Subtitle = ({title}) => {
    return (
        <TitleName>
            {title}
        </TitleName>
    )
}

export default Subtitle;
