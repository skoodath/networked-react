import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import { CardHeader, 
        CardImage, 
        CardItem, 
        Overlay 
        } from '../../styles/aboutstyle';

gsap.registerPlugin(scrollTrigger);

const Benefitcards = React.forwardRef(({ benefitinfo }, ref) => {

    const [showDesc, setShowDesc] = useState(false);


    const {src, alt, title, para}  = benefitinfo;

    const showOverlay = () => {
        if(!showDesc){
            setShowDesc(true);
        } else if ( showDesc){
            setShowDesc(false);
        }
        
    };
    const hideOverlay = () => {
        if(showDesc){
            setShowDesc(false);
        }
        
    }

    const itemRef = useRef(null);
    const imageRef = useRef(null);
    const headerRef = useRef(null);
    const overlayRef = useRef(null);

    const animateCard = () => {


        const tl = gsap.timeline();

        tl.from(itemRef.current, {
            scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play pause reverse reverse',
            scrub: 1
        },
        autoAlpha: 0,
        duration: 1,
        delay: 1,
        scale: 0.8,
        transformOrigin: 'center left',
        ease: 'Expo.easeOut'
        })
        .from(imageRef.current, {
            scrollTrigger: {
                trigger: itemRef.current,
                start: 'top 70%',
                end: 'top 40%',
                toggleActions: 'play pause reverse reverse',
                scrub: 1
            },
            autoAlpha: 0,
            duration: 0.5,
            scale: 0.05,
            transformOrigin: 'center center',
            ease: 'Expo.easeOut'
        },"+=0.5")
        .from(headerRef.current, {
            scrollTrigger: {
                trigger: itemRef.current,
                start: 'top 70%',
                end: 'top 40%',
                toggleActions: 'play pause reverse reverse',
                scrub: 2
            },
            autoAlpha: 0,
            duration: 0.5,
            y: 20,
            scale: 1.1,
            transformOrigin: 'center center',
            ease: 'Expo.easeOut'
        },"+=0.5")
    }

  
    useEffect(()=>{
        animateCard();
    },[]);

    useEffect(() => {
        let clickStatus = showDesc;
        if (clickStatus){
            
            gsap.to(overlayRef.current,
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.7,
                    delay: 0.3,
                    ease: 'Expo.easeOut'

                }
            )
        } else if (!clickStatus) {
            gsap.to(overlayRef.current,
                {
                    autoAlpha: 0,
                    x: '100%',
                    duration: 0.5,
                    delay: 0.3,
                    ease: 'Expo.easeIn'
                }
            )
        }

    },[showDesc])
    
    return (
        <>
            <CardItem
                ref={itemRef}
                //onClick={showOverlay}
                onClick={showOverlay}
                onMouseLeave={hideOverlay}
            >
                    <CardImage src={src} alt={alt} ref={imageRef} />
                    <CardHeader ref={headerRef}>{title}</CardHeader>
                    <Overlay ref={overlayRef} show={showDesc}>
                        <p>
                            {para}
                        </p>
                    </Overlay>

            </CardItem>     
        </>
    )
});
export default Benefitcards;
