import React from 'react';
import { AboutSeasons } from '../../styles/seasonstyle';

import SeasonOne from './Seasons/seasonone';
import UpcomingSeasons from './Seasons/upcomingseasons';
import gsap from 'gsap/gsap-core';
import scrollTrigger from 'gsap/ScrollTrigger';
import WhoCan from '../About/whocan';
import { WrapperContainer } from '../../styles/Reusable/wrapperdivstyle';

gsap.registerPlugin(scrollTrigger);



const Seasons = () => {

    return (
        <WrapperContainer>
            <AboutSeasons hgt="auto">
                <SeasonOne />
                
                
            </AboutSeasons>
            <AboutSeasons hgt="100vh">
                <UpcomingSeasons />
            </AboutSeasons>
            <AboutSeasons name="getinvolved">
                <WhoCan />
            </AboutSeasons>
        </WrapperContainer>
    )
};

export default Seasons;
