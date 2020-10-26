import React from 'react';
import { Header } from '../styles/Reusable/sectionheaderstyle';


const SectionHeader = ({text}) => {
    return (
    <Header>
      {text}
    </Header>
    )
}

export default SectionHeader;