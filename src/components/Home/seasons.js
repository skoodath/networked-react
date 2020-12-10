import React from 'react';
import { AboutSeasons } from '../../styles/seasonstyle';

import SeasonOne from './Seasons/seasonone';
import UpcomingSeasons from './Seasons/upcomingseasons';
import WhoCan from '../About/whocan';
import { WrapperContainer } from '../../styles/Reusable/wrapperdivstyle';




const Seasons = () => {

    return (
        <WrapperContainer>
            <AboutSeasons hgt="auto">
                <SeasonOne />
                
                
            </AboutSeasons>
            <AboutSeasons hgt="50vh">
                <UpcomingSeasons />
            </AboutSeasons>
            <AboutSeasons name="getinvolved">
                <WhoCan />
            </AboutSeasons>
        </WrapperContainer>
    )
};

export default Seasons;
