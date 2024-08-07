// src/EmployeeList.js
import React, { Component } from 'react';
import Employee from './Employee';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      minSalaryFilter: 0,
      maxSalaryFilter: 100000
    };

    this.handleMinSalaryChange = this.handleMinSalaryChange.bind(this);
    this.handleMaxSalaryChange = this.handleMaxSalaryChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidMount() {
    fetch('/employees.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ employees: data });
      })
      .catch(error => console.error('Error fetching employee data:', error));
  }

  handleMinSalaryChange(event) {
    this.setState({ minSalaryFilter: event.target.value });
  }

  handleMaxSalaryChange(event) {
    this.setState({ maxSalaryFilter: event.target.value });
  }

  clearFilters() {
    this.setState({
      minSalaryFilter: 0,
      maxSalaryFilter: 100000
    });
  }

  render() {
    const { employees, minSalaryFilter, maxSalaryFilter } = this.state;
    const filteredEmployees = employees.filter(employee => employee.salary >= minSalaryFilter && employee.salary <= maxSalaryFilter);

    return (
      <div className="container mt-5">
        <h2>Employee List</h2>
        <div className="mb-3">
          <label htmlFor="minSalaryFilter" className="form-label">Filter by minimum salary:</label>
          <input
            type="number"
            className="form-control"
            id="minSalaryFilter"
            value={this.state.minSalaryFilter}
            onChange={this.handleMinSalaryChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="maxSalaryFilter" className="form-label">Filter by maximum salary:</label>
          <input
            type="number"
            className="form-control"
            id="maxSalaryFilter"
            value={this.state.maxSalaryFilter}
            onChange={this.handleMaxSalaryChange}
          />
        </div>
        <button className="btn btn-secondary mb-3" onClick={this.clearFilters}>Clear Filter</button>
        {filteredEmployees.map(employee => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </div>
    );
  }
}

export default EmployeeList;
