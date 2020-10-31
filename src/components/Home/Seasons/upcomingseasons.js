import React from 'react';
import { UpcomingImageWrapper, UpcomingSeasonHeader, UpcomingSeasonsCard, UpcomingSeasonWrapper } from '../../../styles/seasonstyle';
import Epidemic from '../../../illustrations/epidemic.png';
import BioInvest from '../../../illustrations/bioinvestigate.png';
import fakenews from '../../../illustrations/fakenews.png'
const UpcomingSeasons = () => {
    return (
        <UpcomingSeasonWrapper>
                    
                    <UpcomingSeasonsCard>
                        <UpcomingImageWrapper>
                            <img src={Epidemic} alt="" />
                        </UpcomingImageWrapper>
                        <UpcomingSeasonHeader>
                            Epidemic Intelligence
                        </UpcomingSeasonHeader>
                    </UpcomingSeasonsCard>
                    <UpcomingSeasonsCard>
                        <UpcomingImageWrapper>
                            <img src={BioInvest} alt="" />   
                        </UpcomingImageWrapper>
                        <UpcomingSeasonHeader>
                            Bio Investigators
                        </UpcomingSeasonHeader>
                    </UpcomingSeasonsCard>
                    <UpcomingSeasonsCard>
                        <UpcomingImageWrapper>
                            <img src={fakenews} alt="" />
                        </UpcomingImageWrapper>
                        <UpcomingSeasonHeader>
                            Operation Fake News
                        </UpcomingSeasonHeader>
                    </UpcomingSeasonsCard>
                </UpcomingSeasonWrapper>
    )
}

export default UpcomingSeasons;
