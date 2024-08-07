import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      age: 30
    };

    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeName() {
    this.setState({ name: 'Jane Smith' });
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Parent Component</h1>
        <button className="btn btn-primary mb-3" onClick={this.handleChangeName}>Change Name</button>
        <ChildComponent name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

export default ParentComponent;
