import React from 'react';
import {
    PathwayListItem,
    PathwayImgWrap,
    PathwayImg,
    PathwayText,
    PathwayCount
} from '../../../styles/newpathwaystyle';


const NewPathway = ({pathwaySteps}) => {
    const {id, image, alt, text} = pathwaySteps;

    return (
            <>
                <PathwayListItem>
                <PathwayCount>{id}</PathwayCount>
                <PathwayImgWrap>
                    <PathwayImg src={image} alt={alt} />
                </PathwayImgWrap>
                    
                    <PathwayText >
                        {text}
                    </PathwayText>
                </PathwayListItem>
                    
            </>
    )
};

export default NewPathway;