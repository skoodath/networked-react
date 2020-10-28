import React from 'react';
import { Header } from '../styles/Reusable/subheaderstyle';

const SubHeader = ({text, smalltext}) => {
    return (
    <Header>
      <span>
        {smalltext}
      </span>
      {text}
    </Header>
    )
}

export default SubHeader;
