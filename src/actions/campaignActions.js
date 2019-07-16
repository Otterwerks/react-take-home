import axios from 'axios';

export const getCampaigns = () => {
    return dispatch => {
        dispatch(getCampaignsBegin());
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
    .then(response => {
      dispatch(getCampaignsSuccess(response.data.campaigns));
    })
    .catch(error => {
      dispatch(getCampaignsFailure(error));
    })}
}

export const getCampaignsBegin = () => ({
    type: 'GET_CAMPAIGNS_BEGIN'
});

export const getCampaignsSuccess = (campaigns) => ({
    type: 'GET_CAMPAIGNS_SUCCESS',
    campaigns
})

export const getCampaignsFailure = (error) => ({
    type: 'GET_CAMPAIGNS_FAILURE',
    error
})