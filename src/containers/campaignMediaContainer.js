import { connect } from 'react-redux';
import CampaignMedia from '../components/CampaignMedia';
import { showMessage, hideMessage } from '../actions/messageActions';

const mapStateToProps = (state, ownProps) => ({
    ...state,
    media: ownProps
});

const mapDispatchToProps = dispatch => ({
    showMessage: (message) => dispatch(showMessage(message)),
    hideMessage: () => dispatch(hideMessage())
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignMedia);