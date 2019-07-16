import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = state => ({
    view: state.view
});

export default connect(mapStateToProps)(App);