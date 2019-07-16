import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = state => ({
    message: state.message.message,
    display: state.message.display
});

export default connect(mapStateToProps)(Header);