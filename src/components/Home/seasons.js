import React, { useEffect, useRef } from 'react';
import SectionHeader from '../../components/sectionheader';
import Pathway from './Seasons/pathway';
import pathway from './Seasons/pathwaycards';
import { BsArrowDown } from 'react-icons/bs';
import { AboutSeasons, AboutSeasonItems } from '../../styles/seasonstyle';
import { PathwayIntro, ArrowWrap, MySpan } from '../../styles/Reusable/Arrowstyle';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
//import 'swiper/components/pagination/pagination.scss';
//import 'swiper/components/scrollbar/scrollbar.scss';
import SeasonOne from './Seasons/seasonone';
import UpcomingSeasons from './Seasons/upcomingseasons';
import gsap from 'gsap/gsap-core';
import scrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTrigger);

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Seasons = () => {

    const itemRef = useRef(null);
    const upcomingRef = useRef(null);

    const animateTitle = el => {

        gsap.from(el, {
            scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play pause reverse reverse',
            scrub: 3
        },
        autoAlpha: 0,
        duration: 1,
        scale: 1.1,
        transformOrigin: 'top left',
        ease:'Expo.easeOut'

        })
    }
    
    useEffect(()=>{

        gsap.fromTo(itemRef.current, {
        opacity: 0,
        scale: 1.1
        },{
            opacity: 1,
            scale: 1
        });

        animateTitle(upcomingRef.current);


    },[]);

    return (
        <>
            <AboutSeasons hgt="100vh" >
                <PathwayIntro>
                    <MySpan spansize={'3rem'}>Explore</MySpan>
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
                        spaceBetween={50}
                        slidesPerView='auto'
                        navigation
                        pagination
                        wrapperTag='ul'
                        grabCursor={true}
                        centeredSlides={true}
                
                    >
                            {pathway.map(paths => <SwiperSlide key={paths.id} tag='li'>
                                <Pathway
                                ref={itemRef}
                                pathwayStep={paths}
                                />
                                </SwiperSlide>)}   
                        
                    </Swiper>
                </AboutSeasonItems>
            </AboutSeasons>
            <AboutSeasons hgt="100vh">
                <SeasonOne />
                
                
            </AboutSeasons>
            <AboutSeasons>
                <SectionHeader
                        ref={upcomingRef}
                        text={`Upcoming Seasons`} 
                    />
                <UpcomingSeasons />
            </AboutSeasons>
        </>
    )
};

export default Seasons;
