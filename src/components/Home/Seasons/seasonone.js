import React, { useRef, useEffect } from 'react';
import { NameYearText, SeasonOneContainer, SeasonOneHeader, SeasonText, SeasonOneWrapper, StyledSluethPara1, StyledSluethPara2, ClosingPara } from '../../../styles/seasonstyle';
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
    const para1Ref = useRef(null);
    const para2Ref = useRef(null);
    const para3Ref = useRef(null);
    const para4Ref = useRef(null);
    const closingRef = useRef(null);


    const animateTitle = el => {

        gsap.from(el, {
            scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
            scrub: 3
        },
            autoAlpha: 0,
            duration: 1,
            y: 100,
            ease:'Expo.easeOut'
        })
    }

    const animateSubtitle = () => {

        const tl = gsap.timeline();

        tl.from(imageRef.current, {
            scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none none',
            scrub: 3
        },
            autoAlpha: 0,
            duration: 1,
            delay: 0.5,
            scale: 0.1,
            ease:'Expo.easeOut'

        })
        tl.from([titleRef.current,subtitleRef.current], {
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none',
                scrub: 3
            },
            autoAlpha: 0,
            duration: 1,
            y: 100,
            ease: 'Expo.easeOut',
            stagger: {
                amount: 0.1
            }
        })
        
    }
    const animatePara = el => {
        gsap.from(el,{
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none',
                scrub: 3
            },
            autoAlpha: 0,
            duration: 1,
            y: 100,
            ease: 'Expo.easeOut',
            stagger: {
                amount: 0.01
            }
        })
    }
    const animateClosing = () => {
        gsap.from(closingRef.current,{
            scrollTrigger: {
                trigger: closingRef.current,
                start: 'top 80%',
                end: 'top 70%',
                toggleActions: 'play none none none',
                scrub: 1
            },
            autoAlpha: 0,
            duration: 1,
            scale: 0,
            ease: 'Bounce.easeOut',

        })
    }
    
    useEffect(()=>{
        animateTitle(seasononeRef.current);
    });

    useEffect(()=> {
        animateSubtitle();
        animatePara(para1Ref.current);
        animatePara(para2Ref.current);
        animatePara(para3Ref.current);
        animatePara(para4Ref.current);
        animateClosing();
    })

    return (
        <SeasonOneContainer>
            <SectionHeader
                        ref={seasononeRef}
                        text={`Season One`} 
                    />
            <img src={socialsleuth} alt="Social Sleuths" ref={imageRef} />
            <SeasonText>
                <SeasonOneHeader ref={titleRef}>networkED 2021</SeasonOneHeader>
                <NameYearText ref={subtitleRef}>Social Sleuths</NameYearText>
            </SeasonText>
            <SeasonOneWrapper>
                <StyledSluethPara1 ref={para1Ref} margintop>
                    Children explore the world of communities..
                </StyledSluethPara1>
                <StyledSluethPara2 ref={para2Ref}>
                    ..how relationships between people, artifacts, and ideas can be analyzed and interpreted through social network mapping
                </StyledSluethPara2>
                <StyledSluethPara1 ref={para3Ref}>
                They will investigate and generate data maps of these relationships to help understand how people communicate and exchange information...
                </StyledSluethPara1>
                <StyledSluethPara2 ref={para4Ref}>
                ...and even track down some critical power hubs that can bring massive social change through real world digital networks
                </StyledSluethPara2>
                <ClosingPara ref={closingRef}>
                    Stay tuned for updates!
                </ClosingPara>
            </SeasonOneWrapper>
        </SeasonOneContainer>
    )
}

export default SeasonOne;
