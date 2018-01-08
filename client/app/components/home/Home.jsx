import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import * as actions from '../../actions/actions';

class Home extends React.Component {
  static propTypes = {
    settings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    moreSettings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    updateLocation: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { updateLocation } = this.props;
    updateLocation();
  }

  render() {
    const { settings, moreSettings } = this.props;
    if (settings) {
      console.log(settings.toJS());
    }
    if (moreSettings) {
      console.log(moreSettings.toJS());
    }

    return <div>HOME</div>;
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  moreSettings: state.moreSettings,
});

const mapDispatchToProps = dispatch => ({
  updateLocation: () => dispatch(actions.updateLocation('HOME')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
