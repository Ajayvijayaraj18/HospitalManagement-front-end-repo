import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      disname: '',
      dname: '',
      pname: '',
      time: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handlePatientNameChange = (event) => {
    this.setState({ pname: event.target.value });
  };

  handleDocNameChange = (event) => {
    this.setState({ dname: event.target.value });
  };

  handleDiseaseNameChange = (event) => {
    this.setState({ disname: event.target.value });
  };

  handleTimeOfAddmissionChange = (event) => {
    this.setState({ time: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      pname: this.state.pname,
      dname: this.state.dname,
      disname: this.state.disname,
      time: this.state.time
    };

    axios.post('http://127.0.0.1:8080/add', data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">ID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />

        <label className="sign-label">Patient Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.pname}
          onChange={this.handlePatientNameChange}
        />

        <label className="sign-label">Doctor Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.dname}
          onChange={this.handleDocNameChange}
        />

        <label className="sign-label">Disease Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.disname}
          onChange={this.handleDiseaseNameChange}
        />

        <label className="sign-label">Time of Admission</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.time}
          onChange={this.handleTimeOfAddmissionChange}
        />

        <button className="login-button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

export default Login;
