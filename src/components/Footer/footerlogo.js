import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLogo } from '../../styles/footerstyle';


const Footerlogo = () => {
    return (
            <FooterLogo>
                <Link to="/">networkED.in</Link>
            </FooterLogo>
    )
}

export default Footerlogo;
