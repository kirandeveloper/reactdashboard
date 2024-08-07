import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello'
    };
  }

  render() {
    const { name, age } = this.props;
    const { greeting } = this.state;

    return (
      <div className="card p-3">
        <h2>{greeting}, {name}!</h2>
        <p>Age: {age}</p>
      </div>
    );
  }
}

export default ChildComponent;
