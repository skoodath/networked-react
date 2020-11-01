import React from 'react';
import { AppCardDetails, AppCardHeader, AppCardHeaderWrap, AppImageWrapper, AppListItem } from '../../styles/netsciencestyle';

const Application = ({netapp}) => {

    const {image, title, desc} = netapp;

    return (
        <AppListItem>
            <AppCardHeaderWrap>
                <AppImageWrapper>
                    <img src={image} alt={title} />
                </AppImageWrapper>
                <AppCardHeader>
                    {title}
                </AppCardHeader>
            </AppCardHeaderWrap>
            
            <AppCardDetails>
                {desc}
            </AppCardDetails>
        </AppListItem>
    )
}

export default Application;
