import React from 'react';
import { SubTextPara } from '../styles/Reusable/subtextstyle';


const SubText = React.forwardRef((props, ref) => {
    const {text} = props;
    return (
    <SubTextPara
        ref={ref}
    >{text}</SubTextPara>
    )
})

export default SubText;
