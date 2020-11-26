import React from 'react';
import {
    PathwayWrap,
    PathwayContentWrap,
    PathwayImgWrap,
    PathwayImg,
    PathwayText
} from '../../../styles/pathwaystyle';


const Pathway = React.forwardRef(({pathwayStep}, ref) => {
    const {alt, image, text} = pathwayStep;
    return (
            <PathwayWrap
                ref={ref}
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
});

export default Pathway;
