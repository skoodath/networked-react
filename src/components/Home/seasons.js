import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../../components/sectionheader';
import Pathway from './Seasons/pathway';
import pathway from './Seasons/pathwaycards';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SeasonOne from './Seasons/seasonone';

const AboutSeasons = styled.section`
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 80%;
    margin: 0 auto;
`;

const AboutSeasonItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: center;
    position: relative;
    width: 100%;
    max-width: 1280px;
    height: 320px;
    margin: 0 auto;
    overflow: hidden;
    .swiper-button-prev{
        left: 0;
        height: 2rem;
        color: #03243C;
    }
    .swiper-button-next{
        right: 0;
        height: 2rem;
        color: #03243C;
    }
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Seasons = () => {

    return (
        <>
            <AboutSeasons>
                <SectionHeader
                    text={`Fellowship Pathway`} 
                />
                <AboutSeasonItems>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        progressbar="true"
                    >
                            {pathway.map(paths => <SwiperSlide key={paths.id}>
                                <Pathway 
                                pathwayStep={paths}
                                />
                                </SwiperSlide>)}   
                        
                    </Swiper>
                </AboutSeasonItems>
            </AboutSeasons>
            <AboutSeasons>
                <SeasonOne />
            </AboutSeasons>
        </>
    )
}

export default Seasons;
