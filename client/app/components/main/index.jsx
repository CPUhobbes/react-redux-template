import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const socket = io.connect();
// Main class component
class Main extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static createNav() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">Resistance Game</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Join a Game</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Log In</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  constructor(props) {
    super(props);
    this.state = {};

    // Bind functions here
  }

  // Other functions here

  componentDidMount() {
    socket.emit('chat message', 'Hello there');
  }

  render() {
    return (
      <div>
        {Main.createNav()}
        {React.cloneElement(this.props.children)}
      </div>
    );
  }
}

export default Main;
