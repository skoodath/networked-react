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
                    <PathwayText >
                        {text}
                    </PathwayText>
                    <PathwayImgWrap>
                        <PathwayImg src={image} alt={alt} />
                    </PathwayImgWrap>
                    
                </PathwayListItem>
                    
            </>
    )
};

export default NewPathway;