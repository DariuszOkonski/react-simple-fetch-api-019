import React from 'react';
import './App.css';
import SinglePerson from './SinglePerson';

const API = `https://randomuser.me/api/?results=5`;

class App extends React.Component {
  state = {
    users: []
  }

  fetchUsers = () => {
    fetch(API)
      .then(res => {
        if (res.status == 200)
          return res.json();
        else
          throw new Error('Something went wrong');
      })
      .then(res => {
        this.setState({
          users: res.results
        })
      })
      .catch(err => alert(err))

  }

  handleButton = () => {
    this.fetchUsers();
  }

  render() {
    const allUsers = this.state.users.map(user =>
      <SinglePerson key={user.registered.date} {...user} />)

    return (
      <div className="app">
        <h1>Fetch data app</h1>

        <button
          onClick={this.handleButton}
        >Add 5 users</button>

        <ul>
          {allUsers}
        </ul>
      </div>
    );
  }
}

export default App;