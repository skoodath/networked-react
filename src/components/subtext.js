import React from 'react';
import { SubTextPara } from '../styles/Reusable/subtextstyle';


const SubText = React.forwardRef((props, ref) => {
    return (
    <SubTextPara
        ref={ref}
        {...props.children}
    >{props.text}</SubTextPara>
    )
})

export default SubText;
