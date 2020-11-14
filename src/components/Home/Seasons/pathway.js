import React from 'react';
import {
    PathwayWrap,
    PathwayContentWrap,
    PathwayImgWrap,
    PathwayImg,
    PathwayText
} from '../../../styles/pathwaystyle';


const Pathway = ({pathwayStep}) => {
    const {alt, image, text} = pathwayStep;

    return (
            <PathwayWrap
             initial={{
                 scale: 1.2,
                 opacity: 0
             }}
             animate={{
                opacity: 1,
                scale: 1
             }}
             transition={{
                 duration: 2,
                 ease: [0.002, 1.0, -1, 0.98]
             }}
            >
                    <PathwayContentWrap>
                    <PathwayImgWrap>
                        <PathwayImg src={image} alt={alt} />
                    </PathwayImgWrap>
                        
                        <PathwayText >
                            {text}
                        </PathwayText>
                    </PathwayContentWrap>
            </PathwayWrap>

    )
}

export default Pathway;
