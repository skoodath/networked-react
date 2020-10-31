import React from 'react';
import SubHeader from '../components/subheaders';
import NetSciPara from './NetScience/netsciencepara';
import SubText from './subtext';
import { NetWorkScience } from '../styles/netsciencestyle';

const NetScience = () => {
    return (
        <>
        <NetWorkScience>
            <SubHeader text={`Network Science`} smalltext={`What is`} />
            <SubText text={`Network Science is the study of patterns of connections in the real world`} />
        </NetWorkScience>
        <NetWorkScience>
            <NetSciPara />
        </NetWorkScience>
        </>
    )
}

export default NetScience;
