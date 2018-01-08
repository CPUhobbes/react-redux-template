import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import io from 'socket.io-client';
import * as actions from '../../actions/actions';

const socket = io.connect();

class Child extends React.Component {
  static propTypes = {
    settings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    moreSettings: PropTypes.instanceOf(Immutable.Iterable).isRequired,
    updateLocation: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { updateLocation } = this.props;
    socket.emit('test message', 'Hello there');
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

    return <div>CHILD COMPONENT</div>;
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  moreSettings: state.moreSettings,
});

const mapDispatchToProps = dispatch => ({
  updateLocation: () => dispatch(actions.updateLocation('CHILD')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Child);
