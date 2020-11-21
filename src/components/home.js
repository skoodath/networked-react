import React from 'react';
import Header from './Home/header';
import Landing from './Home/landing';
import Intro from './Home/intro';
import Fellowship from './Home/fellowship';
import Seasons from '../components/Home/seasons';
import {gsap} from 'gsap';
import {EasePack } from 'gsap/EasePack';
import scrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(scrollTrigger);
gsap.registerPlugin(EasePack);

const Home = () => {

   /*const videoRef = useRef(null);
        
    const animateSections = el => {

        gsap.from(el, {
                scrollTrigger: {
                trigger: el,
                start:  'top 80%',
                end: 'bottom 10%',
                toggleActions: 'play pause reverse reverse',
                scrub: true,
            },
            opacity: 0,
            duration: 0.5,
            delay: 10,
            y: 100,
            ease: Power4.easeOut
            }
        )
    }

    useEffect(()=>{
        animateSections(videoRef.current);
    },[]);*/

    
    return (
        <>
            <Header />
            <Landing />
            <Intro />
            <Fellowship />
            <Seasons />
        </>
    )
}

export default Home;