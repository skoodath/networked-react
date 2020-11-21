import React from 'react';
import {
    PathwayWrap,
    PathwayContentWrap,
    PathwayImgWrap,
    PathwayImg,
    PathwayText
} from '../../../styles/pathwaystyle';


const Pathway = React.forwardRef((props, ref) => {
    const {alt, image, text} = props.pathwayStep;

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
