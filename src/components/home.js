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

gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(EasePack);

const Home = () => {

    const introRef = useRef(null);


    useEffect(()=>{
        console.log(introRef.current);

        gsap.from(introRef.current, {
            scrollTrigger: {
                trigger: introRef.current,
                start:  'top center',
                toggleActions: 'play none none reverse',
                
            },
            opacity: 0,
            duration: 1,
            delay: 0.5, 
            y: 100,
            ease: Power4.easeOut
            
            }
        )
    })

    
    return (
        <>
            <Header />
            <Landing />
            <Intro ref={introRef} />
            <Fellowship />
            <Seasons />
        </>
    )
}

export default Home;