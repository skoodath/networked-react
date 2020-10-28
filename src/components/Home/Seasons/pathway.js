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
            <PathwayWrap>
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
