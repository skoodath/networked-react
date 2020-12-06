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

    //const [showDesc, setShowDesc] = useState(false);


    const {src, alt, title, para, colstart, colend, rowstart, rowend }  = benefitinfo;

    /* const showOverlay = () => {
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
        
    } */

    const itemRef = useRef(null);
    const imageRef = useRef(null);
    const headerRef = useRef(null);
    const overlayRef = useRef(null);

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
        delay: 1,
        y: 50,
        ease: 'Expo.easeOut'
        })
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
                    <CardImage src={src} alt={alt} ref={imageRef} />
                    <CardHeader ref={headerRef}>{title}</CardHeader>
                </CardHeaderWrapper>
                    <Overlay ref={overlayRef}>
                        <p>
                            {para}
                        </p>
                    </Overlay>

            </CardItem>     
        </>
    )
});
export default Benefitcards;
