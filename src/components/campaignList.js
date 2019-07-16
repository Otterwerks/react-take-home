import React, { useEffect } from 'react';
import Campaign from './campaign';
import Error from './error';
import Loading from './loading';

const CampaignList = ({ getCampaigns, campaignList, loading, error }) => {
    
    useEffect(() => {
        getCampaigns();
    }, []);

    const content = (
        <div>
            {campaignList.map(campaign => 
                <Campaign key={campaign.id}{...campaign} />)}
        </div>
    );
    
    return (
        <div className="campaigns">
            {loading == true ? <div><Loading /></div> : error == null ? content : <div><h3><Error /></h3></div>}
        </div>
    )
};

export default CampaignList;