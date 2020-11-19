import React from 'react';
import Header from './Home/header';
import Landing from './Home/landing';
import Intro from './Home/intro';
import Fellowship from './Home/fellowship';
import Seasons from '../components/Home/seasons';
import {gsap, Power4} from 'gsap';
import {EasePack } from 'gsap/EasePack';
import scrollTrigger from 'gsap/ScrollTrigger'; 
import { useRef } from 'react';
import { useEffect } from 'react';
import IntroVideo from './Home/Intro/video';
import IntroText from './Home/Intro/introtext';

gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(EasePack);

const Home = () => {

    const introRef = useRef(null);
    const videoRef = useRef(null);
    const introtextRef = useRef(null);
        
    const animateSections = el => {

        gsap.from(el, {
                scrollTrigger: {
                trigger: el,
                start:  'top 50%',
                toggleActions: 'play pause reverse reverse',
                scrub: true
            },
            opacity: 0,
            duration: 0.5,
            y: 100,
            ease: Power4.easeOut
            }
        )
    }

    useEffect(()=>{
        animateSections(introRef.current);
        animateSections(videoRef.current);
        animateSections(introtextRef.current);
    },[]);

    
    return (
        <>
            <Header />
            <Landing />
            <Intro ref={introRef} />
            <IntroVideo ref={videoRef} />
            <IntroText ref={introtextRef} />
            <Fellowship />
            <Seasons />
        </>
    )
}

export default Home;