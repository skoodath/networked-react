import React from 'react';
import { NameYearText, SeasonOneContainer, SeasonOneSubTitle, SeasonText } from '../../../styles/seasonstyle';

const SeasonOne = () => {
    return (
        <SeasonOneContainer>
            <SeasonText>
                <NameYearText>networkED 2021</NameYearText>
                <SeasonOneSubTitle>Season One</SeasonOneSubTitle>
            </SeasonText>
        </SeasonOneContainer>
    )
}

export default SeasonOne;
