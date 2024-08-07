// src/EventExample.js
import React, { Component } from 'react';

class EventExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      submittedValue: '',
      hover: false
    };

    // Bind event handlers
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick() {
    alert('Button clicked!');
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submittedValue: this.state.inputValue });
  }

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { inputValue, submittedValue, hover } = this.state;

    return (
      <div className="container mt-5">
        <h1>Event Handling Example</h1>

        {/* Button Click */}
        <button className="btn btn-primary mb-3" onClick={this.handleClick}>
          Click Me
        </button>

        {/* Form Submission */}
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputField" className="form-label">Enter something:</label>
            <input
              type="text"
              id="inputField"
              className="form-control"
              value={inputValue}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>

        {/* Display Submitted Value */}
        {submittedValue && (
          <div className="mt-3">
            <h2>Submitted Value: {submittedValue}</h2>
          </div>
        )}

        {/* Mouse Hover */}
        <div
          className={`mt-3 p-3 ${hover ? 'bg-info text-white' : 'bg-light'}`}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {hover ? 'Mouse is over me!' : 'Hover over me!'}
        </div>
      </div>
    );
  }
}

export default EventExample;
