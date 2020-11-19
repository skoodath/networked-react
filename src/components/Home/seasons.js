import React from 'react';
import SectionHeader from '../../components/sectionheader';
import Pathway from './Seasons/pathway';
import pathway from './Seasons/pathwaycards';
import socialsleuth from '../../illustrations/ss8.png';
import { BsArrowDown } from 'react-icons/bs';
import { AboutSeasons, AboutSeasonItems, StyledSluethPara, SeasonOneHeader } from '../../styles/seasonstyle';
import { PathwayIntro, ArrowWrap } from '../../styles/Reusable/Arrowstyle';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SeasonOne from './Seasons/seasonone';
import UpcomingSeasons from './Seasons/upcomingseasons';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const Seasons = () => {

    return (
        <>
            <AboutSeasons hgt="100vh" >
                <PathwayIntro>
                    <span>Explore</span>
                    <ArrowWrap>
                        <BsArrowDown />
                    </ArrowWrap>
                    
                </PathwayIntro>
            </AboutSeasons>
            <AboutSeasons>
                <SectionHeader
                    text={`Fellowship Pathway`} 
                />
                <AboutSeasonItems>               
                    <Swiper
                        spaceBetween={80}
                        slidesPerView='auto'
                        navigation
                        pagination
                        wrapperTag='ul'
                        effect='coverflow'
                        grabCursor={true}
                        centeredSlides={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                    >
                            {pathway.map(paths => <SwiperSlide key={paths.id} tag='li'>
                                <Pathway 
                                pathwayStep={paths}
                                />
                                </SwiperSlide>)}   
                        
                    </Swiper>
                </AboutSeasonItems>
            </AboutSeasons>
            <AboutSeasons>
                <SeasonOne />
                
                <PathwayIntro>
                    <span spansize="3rem">Know More</span>
                    <ArrowWrap>
                        <BsArrowDown />
                    </ArrowWrap>
                    
                </PathwayIntro>
            </AboutSeasons>
            <AboutSeasons hgt="100vh">
                <img src={socialsleuth} alt="Social Sleuths" style={{width: '100px'}} />
                <SeasonOneHeader>Social Sleuths</SeasonOneHeader>
                <StyledSluethPara>
                    In Season #1, kids explore the world of communities, about how relationships between people, artifacts, and ideas can be analyzed and interpreted through social network mapping. Kids will investigate and generate data maps of these relationships to help understand how people communicate and exchange information in any given setting, and even track down some critical power hubs that can bring massive social change through real world digital networks. Stay tuned for updates on the Social Sleuths!
                </StyledSluethPara>
            </AboutSeasons>
            <AboutSeasons>
                <SectionHeader
                        text={`Upcoming Seasons`} 
                    />
                <UpcomingSeasons />
            </AboutSeasons>
        </>
    )
};

export default Seasons;
