import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import { CardHeader, 
    CardHeaderWrapper, 
        CardImage, 
        CardItem, 
        Overlay 
        } from '../../styles/aboutstyle';

gsap.registerPlugin(scrollTrigger);

const Benefitcards = React.forwardRef(({ benefitinfo }, ref) => {


    const {src, alt, title, para, colstart, colend, rowstart, rowend }  = benefitinfo;

    const itemRef = useRef(null);
    const animateCard = () => {


        gsap.from(itemRef.current, {
            scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'restart none none none',
            scrub: 3
        },
        autoAlpha: 0,
        duration: 1,
        y: 100,
        ease: 'Expo.easeOut'
        }, "+=1")
    }
  
    useEffect(()=>{
        animateCard();
    });

    
    return (
        <>
            <CardItem
                ref={itemRef}
                colstart={colstart}
                colend={colend}
                rowstart={rowstart}
                rowend={rowend}
            >
                <CardHeaderWrapper>
                    <CardImage src={src} alt={alt} />
                    <CardHeader>{title}</CardHeader>
                </CardHeaderWrapper>
                    <Overlay>
                        <p>
                            {para}
                        </p>
                    </Overlay>

            </CardItem>     
        </>
    )
});
export default Benefitcards;
