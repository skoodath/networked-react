import React from 'react';
import NetSciPara from './NetScience/netsciencepara';
import SubText from './subtext';
import { AppListWrap, NetWorkScience } from '../styles/netsciencestyle';
import Application from './NetScience/netapplication';
import NetCards from '../components/NetScience/netcarddata';
import SectionHeader from './sectionheader';
import { HeaderBig, HeaderSmall } from '../styles/Reusable/subheaderstyle';

const NetScience = () => {

    

    return (
        <>
        <NetWorkScience>
            <HeaderSmall>What is</HeaderSmall>
            <HeaderBig>Network Science</HeaderBig>
            <SubText text={`Network Science is the study of patterns of connections in the real world`} />
        </NetWorkScience>
        <NetWorkScience>
            <NetSciPara />
        </NetWorkScience>
        <NetWorkScience hgt="auto">
            <SectionHeader
                text={"Applications of Network Science"}
             />
            <AppListWrap>
                {NetCards.map(apps => <Application
                    netapp={apps}
                    key={apps.id}
                    />
                    )}
            </AppListWrap>
        </NetWorkScience>
        </>
    )
}

export default NetScience;
