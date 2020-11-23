import React from 'react';
import { HeaderSmall, HeaderBig } from '../styles/Reusable/subheaderstyle';

const SubHeader = React.forwardRef(({text, smalltext}, ref) => {

   //const {text, smalltext} = props

    return (
      <>
      <HeaderSmall
        ref={ref}>
        {smalltext}
      </HeaderSmall>
    <HeaderBig
      ref={ref}>
      {text}
    </HeaderBig>
    </>
    )
});

export default SubHeader;
