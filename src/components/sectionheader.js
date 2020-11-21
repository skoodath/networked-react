import React from 'react';
import { Header } from '../styles/Reusable/sectionheaderstyle';


const SectionHeader = React.forwardRef((props, ref) => {
    const {text} = props;
    return (
    <Header
      ref={ref}>
      {text}
    </Header>
    )
});

export default SectionHeader;