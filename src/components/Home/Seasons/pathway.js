import React from 'react';
import {
    PathwayWrap,
    PathwayContentWrap,
    PathwayImg,
    PathwayText
} from '../../../styles/Seasons/pathwaystyle';


const Pathway = ({pathwayStep}) => {
    const {alt, image, text} = pathwayStep;

    return (
            <PathwayWrap>
                    <PathwayContentWrap>
                        <PathwayImg src={image} alt={alt} />
                        <PathwayText >
                            {text}
                        </PathwayText>
                    </PathwayContentWrap>
            </PathwayWrap>

    )
}

export default Pathway;
