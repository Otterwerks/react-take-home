import { connect } from 'react-redux';
import CampaignList from '../components/campaignList';
import { getCampaigns } from '../actions/campaignActions';

const mapStateToProps = state => ({
    campaignList: state.campaigns.campaignList,
    loading: state.campaigns.loading,
    error: state.campaigns.error
});

const mapDispatchToProps = dispatch => ({
    getCampaigns: () => dispatch(getCampaigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignList);