import React, { useEffect, useRef } from 'react';
import { UpcomingImageWrapper, UpcomingSeasonHeader, UpcomingSeasonsCard, UpcomingSeasonWrapper } from '../../../styles/seasonstyle';
import Epidemic from '../../../illustrations/epidemic.png';
import BioInvest from '../../../illustrations/bioinvestigate.png';
import fakenews from '../../../illustrations/fakenews.png';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTrigger);


const UpcomingSeasons = () => {

    const upcomingRef = useRef(null);
    const epiRef = useRef(null);
    const bioRef = useRef(null);
    const opsRef = useRef(null);



    useEffect(()=>{

            gsap.from(upcomingRef.current, {
                scrollTrigger: {
                    trigger: upcomingRef.current,
                    start: '5% 80%',
                    end: '5% 50%',
                    toggleActions: 'restart none reverse reverse',
                    scrub: 1
                    },
                    autoAlpha: 0,
                    duration: 1,
                    delay: 0.3,
                    scale: 0.9,
                    ease: 'Expo.easeOut',
                    transformOrigin: 'left top'
            })

            gsap.from([epiRef.current, bioRef.current, opsRef.current],{
                    scrollTrigger: {
                    trigger: epiRef.current,
                    start: '5% 80%',
                    end: '5% 50%',
                    toggleActions: 'restart none reverse reverse',
                    },
                    autoAlpha: 0,
                    duration: 0.7,
                    delay: 1.5,
                    y: 50,
                    stagger: {
                        amount: 0.5
                    },
                    ease: 'Expo.easeOut'
                })
    })
 
    return (
        <UpcomingSeasonWrapper>
            <UpcomingSeasonsCard ref={epiRef}>
                <UpcomingImageWrapper>
                    <img src={Epidemic} alt="" />
                </UpcomingImageWrapper>
                <UpcomingSeasonHeader>
                    Epidemic Intelligence
                </UpcomingSeasonHeader>
            </UpcomingSeasonsCard>
            <UpcomingSeasonsCard ref={bioRef}>
                <UpcomingImageWrapper>
                    <img src={BioInvest} alt="" />   
                </UpcomingImageWrapper>
                <UpcomingSeasonHeader>
                    Bio Investigators
                </UpcomingSeasonHeader>
            </UpcomingSeasonsCard>
            <UpcomingSeasonsCard ref={opsRef}>
                <UpcomingImageWrapper>
                    <img src={fakenews} alt="" />
                </UpcomingImageWrapper>
                <UpcomingSeasonHeader>
                    Operation Fake News
                </UpcomingSeasonHeader>
            </UpcomingSeasonsCard>
        </UpcomingSeasonWrapper>
    )
};

export default UpcomingSeasons;
