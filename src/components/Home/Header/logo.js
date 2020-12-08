import React from 'react';
import { Title } from '../../../styles/headerstyle';
import networkedtype from '../../../illustrations/netedtype.svg';

const Logo = () => (
    <Title
        to="landing"
        smooth={true} 
        offset={-100} 
        duration={500}
    >
        <img src={networkedtype} alt="networkED logo" />
    </Title>
)

export default Logo;
