import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../../components/sectionheader';
import LearnMore from '../learnmore';

const AboutSeasons = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(12, 1fr);
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const AboutSeasonItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    grid-column-start: ${({ colStart }) => colStart};
    grid-column-end: ${({ colEnd }) => colEnd};
    grid-row-start: ${({ rowStart }) => rowStart};
    grid-row-end: ${({ rowEnd }) => rowEnd};
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
`;

const Seasons = () => {
    return (
        <>
            <AboutSeasons>
                <AboutSeasonItems colStart="1" colEnd="-1" rowStart="2" rowEnd="3">
                        <SectionHeader
                        text={`Fellowship Pathway`} 
                        />
                </AboutSeasonItems>
                <AboutSeasonItems colStart="3" colEnd="5" rowStart="4" rowEnd="5">
                        <LearnMore />
                </AboutSeasonItems>
            
            </AboutSeasons>
        </>
    )
}

export default Seasons;
