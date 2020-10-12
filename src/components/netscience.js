import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/subheaders';
import NetSciPara from './NetScience/netsciencepara';
import SubText from './subtext';
import LearnMore from './learnmore';

const NetWorkScience = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
`;

const NetScience = () => {
    return (
        <>
        <NetWorkScience>
            <SubHeader text={`Network Science`} smalltext={`What is`} />
            <SubText text={`Network Science is the study of patterns of connections in the real world`} />
            <LearnMore />
        </NetWorkScience>
        <NetWorkScience>
            <NetSciPara />
        </NetWorkScience>
        </>
    )
}

export default NetScience;
