import React from 'react';
import CampaignMedia from '../containers/campaignMediaContainer';

const CampaignMediaList = ( campaign ) => (
    <div className="carousel-wrapper">
        <div className="campaign-media-carousel">
            {campaign.medias.map((media, key) => 
                <CampaignMedia key={key}{...media} />)}
        </div>
    </div>
);

export default CampaignMediaList;