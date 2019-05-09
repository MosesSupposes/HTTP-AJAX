import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Friendslist from './components/Friendslist';


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

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  addFriend = event => {
    event.preventDefault();

    const friends = {
      name: this.state.friends.name,
      age: this.state.friends.age,
      email: this.state.friends.email
    };

    axios.post('http://localhost:5000/friends', { friends })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  deleteFriend = event => {
    event.preventDefault();

    axios.delete(`http://localhost:5000/friends/${this.state.friends.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {

    return (
      <div>
      <Friendslist friends={this.state.friends} />
        
      </div>
    )
  }
}

export default App;
