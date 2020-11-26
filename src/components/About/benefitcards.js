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
        setShowDesc(!showDesc);
    };

    console.log(showDesc);
    const itemRef = useRef(null);
    const imageRef = useRef(null);
    const headerRef = useRef(null);
    const overlayRef = useRef(null);

    const animateCard = () => {


        const tl = gsap.timeline();

        tl.from(itemRef.current, {
            scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 70%',
            end: 'top 40%',
            toggleActions: 'play pause reverse reverse',
            scrub: 1
        },
        autoAlpha: 0,
        duration: 1,
        y: 50,
        scale: 1.05,
        transformOrigin: 'top left',

        })
        tl.from(imageRef.current, {
            scrollTrigger: {
                trigger: itemRef.current,
                start: 'top 70%',
                end: 'top 40%',
                toggleActions: 'play pause reverse reverse',
                scrub: 1
            },
            autoAlpha: 0,
            duration: 1,
            x: -50,
            scale: 1.05,
            transformOrigin: 'top left',
        })
        tl.from(headerRef.current, {
            scrollTrigger: {
                trigger: itemRef.current,
                start: 'top 70%',
                end: 'top 40%',
                toggleActions: 'play pause reverse reverse',
                scrub: 1
            },
            autoAlpha: 0,
            duration: 1,
            x: 50,
            scale: 1.05,
            transformOrigin: 'top right',

        })
    }

  
    useEffect(()=>{
        animateCard();
    },[]);

    useEffect(() => {
        let clickStatus = showDesc;
        console.log(clickStatus);
        if (clickStatus){
            
            gsap.to(overlayRef.current,
                {
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.7,
                    delay: 0.3,
                    ease: 'Bounce.easeOut'

                }
            )
        } else if (!clickStatus) {
            gsap.to(overlayRef.current,
                {
                    autoAlpha: 0,
                    x: '100%',
                    duration: 0.5,
                    delay: 0.3,
                    ease: 'Power0.easeOut'
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
