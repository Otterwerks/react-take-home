import React from 'react';
import CampaignMediaList from './campaignMediaList';

const Campaign = ( campaign ) => {

    const shortenedName = (name) => {
        let shortenedName;
        if (name.length > 25) {
            shortenedName = name.slice(0, 15) + "...";
        } else {
            shortenedName = name;
        }
        return shortenedName;
    }

    return (
        <div>
            <div className="campaign-header">
                <div className="campaign-icon-wrapper"><img className="campaign-icon" src={campaign.campaign_icon_url} /></div>
                <div className="campaign-title-wrapper">
                    <div className="campaign-title"><span className="campaign-name"><h3>{shortenedName(campaign.campaign_name)}</h3></span></div>
                    <div className="campaign-sub-title"><p className="pay-per-install"><strong>{campaign.pay_per_install}</strong> per install</p></div>
                </div>
            </div>
            <div className="campaign-body">
                <div className="campaign-media-list">
                    <CampaignMediaList {...campaign} />
                </div>
            </div>
        </div>
    );
};

export default Campaign;