import React from 'react';
import { Header } from '../styles/Reusable/subheaderstyle';

const SubHeader = React.forwardRef((props, ref) => {

    const {text, smalltext} = props;
    return (
    <Header
      ref={ref}>
      <span>
        {smalltext}
      </span>
      {text}
    </Header>
    )
})

export default SubHeader;
