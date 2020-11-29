import React, { useRef, useEffect } from 'react';
import { NameYearText, SeasonOneContainer, SeasonOneHeader, SeasonText, StyledSluethPara } from '../../../styles/seasonstyle';
import SectionHeader from '../../sectionheader';
import socialsleuth from '../../../illustrations/ss8.png';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(scrollTrigger);

const SeasonOne = () => {

    const seasononeRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const paraRef = useRef(null);


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
        animateTitle(seasononeRef.current);
    });

    useEffect(()=> {
        const tl = gsap.timeline();

        tl.from(imageRef.current, {
            scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play pause reverse reverse',
            scrub: 3
        },
        autoAlpha: 0,
        duration: 1,
        delay: 0.5,
        scale: 0.1,
        transformOrigin: 'bottom center',
        ease:'Expo.easeOut'

        })
        tl.from([titleRef.current,subtitleRef.current, paraRef.current], {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play pause reverse reverse',
                scrub: 3
            },
            autoAlpha: 0,
            duration: 1,
            y: 50,
            transformOrigin: 'bottom left',
            ease: 'Expo.easeOut',
            stagger: {
                amount: 0.5
            }
        })

    })

    return (
        <SeasonOneContainer>
            <SectionHeader
                        ref={seasononeRef}
                        text={`Social Sleuths`} 
                    />
            <img src={socialsleuth} alt="Social Sleuths" style={{width: '100px'}} ref={imageRef} />
            <SeasonText>
                <SeasonOneHeader ref={titleRef}>Season One</SeasonOneHeader>
                <NameYearText ref={subtitleRef}>networkED 2021</NameYearText>
            </SeasonText>
            <StyledSluethPara ref={paraRef}>
                    In Season #1, kids explore the world of communities, about how relationships between people, artifacts, and ideas can be analyzed and interpreted through social network mapping. Kids will investigate and generate data maps of these relationships to help understand how people communicate and exchange information in any given setting, and even track down some critical power hubs that can bring massive social change through real world digital networks. Stay tuned for updates on the Social Sleuths!
                </StyledSluethPara>
        </SeasonOneContainer>
    )
}

export default SeasonOne;
