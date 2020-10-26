import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/subheaders';
import NetSciPara from './NetScience/netsciencepara';
import SubText from './subtext';

const NetWorkScience = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 80%;
    max-width: 1280px;
    margin:0 auto;
`;

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
