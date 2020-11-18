import React from 'react';
import SubHeader from '../components/subheaders';
import NetSciPara from './NetScience/netsciencepara';
import SubText from './subtext';
import { AppListWrap, NetWorkScience } from '../styles/netsciencestyle';
import Application from './NetScience/netapplication';
import NetCards from '../components/NetScience/netcarddata';
import SectionHeader from './sectionheader';

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
