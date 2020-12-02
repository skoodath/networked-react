import React, { useEffect, useRef } from 'react'
import { LandingLayer, LandingOverlay } from '../styles/landingstyle';
import networked from '../illustrations/NetworkEd.png';
import gsap from 'gsap';

const Splash = () => {

    const splashRef = useRef(null);
    const layerRef = useRef(null);
    const imgRef = useRef(null);

  useEffect(() =>{
    const tl = gsap.timeline();
    tl.to(imgRef.current,{
        scale: 0,
        delay: 1,
        opacity: 0,
        duration: 0.5,
        transformOrigin: 'center center'
    })
    tl.to(splashRef.current,{
        autoAlpha: 0,
        x: '-100%',
        duration: 0.5,
        transformOrigin: 'left center',
        ease: 'Expo.easeInOut'
        }, "-=0.2")
    tl.to(layerRef.current, {
        autoAlpha: 0,
        x: '100%',
        duration: 0.5,
        transformOrigin: 'left center',
        ease: 'Expo.easeInOut'
    }, "-=0.1")

},[])

    return (
        <>
        <LandingOverlay ref={splashRef}>
            <img src={networked} alt={'networkED Logo in the center'} ref={imgRef} />
        </LandingOverlay>
        <LandingLayer ref={layerRef} />
        </>
    )
}

export default Splash;
