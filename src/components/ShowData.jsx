import axios from "axios";
import './ShowData.css'
import React, { Component } from "react";

class Showdata extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/read')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Disease Name</th>
            <th>Doctor Name</th>
            <th>Patient Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.disname}</td>
              <td>{item.dname}</td>
              <td>{item.pname}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Showdata;
