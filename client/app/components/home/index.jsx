import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

// Main class component
class Main extends React.Component {
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
        <Jumbotron>
          <h1>The Resistance Game</h1>
          <p>
            Defend the world against tyranny!  Play in a private game with friends or join a public game!
          </p>
          <p className="text-center">
            <Button bsStyle="primary">Join a Game</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Main;
