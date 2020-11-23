import React from 'react';
import { SubTextPara } from '../styles/Reusable/subtextstyle';


const SubText = React.forwardRef(({text}, ref) => {

    return (
    <SubTextPara
        ref={ref}
    >{text}</SubTextPara>
    )
})

export default SubText;
