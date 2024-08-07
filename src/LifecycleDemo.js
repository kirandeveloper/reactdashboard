// src/LifecycleDemo.js
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null
    };
    console.log('Constructor: Component is being initialized.');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('GetDerivedStateFromProps: Component is receiving new props.');
    // Return an object to update state based on props
    return null;
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has been mounted.');
    // Fetch data from JSON API
    fetch('/user.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ users: data, loading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('ShouldComponentUpdate: Deciding whether to re-render.');
    // Return false to prevent re-render or true to allow it
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('GetSnapshotBeforeUpdate: Capturing values before DOM updates.');
    // Return a value to be passed as a third parameter to componentDidUpdate
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate: Component has been updated.');
    // Use snapshot if necessary
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is being removed from the DOM.');
    // Cleanup code here
  }

  render() {
    console.log('Render: Component is being rendered.');
    const { users, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className="container mt-5">
        <h1>User List</h1>
        <ul className="list-group">
          {users.map(user => (
            <li key={user.id} className="list-group-item">
              <h5>{user.name}</h5>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LifecycleDemo;
