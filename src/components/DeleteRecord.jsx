import React, { Component } from 'react';
import './DeleteRecord.css';
import axios from 'axios';

class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: '',
      PatientName: '',
      DocName: '',
      DiseaseName: '',
      TimeOfAddmission: ''
    };
  }

  handleIDChange = (event) => {
    this.setState({ ID: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:8080/delete/${this.state.ID}`);
  };

  render() {
    return (
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">ID</label>
        <input
          className="delete-input"
          type="text"
          value={this.state.ID}
          onChange={this.handleIDChange}
        />

        <button className="delete-button" type="submit">
          Delete Record
        </button>
      </form>
    );
  }
}

export default DeleteRecord;
