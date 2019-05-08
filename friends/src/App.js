import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.friends);
    return (
      <div>
      <Friendslist friends={this.state.friends} />
        
      </div>
    )
  }
}

export default App;
