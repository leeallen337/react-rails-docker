import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const propTypes = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'default'
    };
  }

  componentDidMount() {
    axios.get('/api/v1/hello-world')
      .then((res) => {
        this.setState({
          text: res.data.hello_world
        });
      })
  }

  render() {
    return (
      <h1>
        {this.state.text}
      </h1>
    );
  }
}

App.propTypes = propTypes;

export default App;
