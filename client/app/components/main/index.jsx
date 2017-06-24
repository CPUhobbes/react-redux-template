import React from 'react';
import PropTypes from 'prop-types';

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

  componentWillMount() {}

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
