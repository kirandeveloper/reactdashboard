import React from 'react';

class FormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    // Handle form submission logic here, such as sending the data to a server
    console.log('Submitted data:', { name, email, message });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    );
  }
}

export default FormControl;
