import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

const socket = io.connect();
// Main class component
class Main extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};

    // Bind functions here
    // this.updateList = this.updateList.bind(this);
  }

  // Other functions here

  componentDidMount() {
    socket.emit('chat message', 'Hello there');
  }

  render() {
    return (
      <div>
        <p>Hello React App! Main</p>
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default Main;
