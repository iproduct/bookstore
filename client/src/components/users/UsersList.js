import axios from 'axios';
import React, { Component } from 'react';

class Readers extends Component {
  state = {
    readers: []
  }

  async componentDidMount() {
    const readers = await axios.get('http://localhost:4000/users');
    this.setState({ readers });
  }

  render() {
    return (
      <div className="Readers">
        Readers

      </div>
    );
  }
}

export default Readers;