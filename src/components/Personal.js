import React, { Component, useState } from "react";
import "../assets/Forms.scss"
import reactDom from "react-dom";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTextChange = (event) => {
    const value = event.target.value;
    
    this.setState({ ...this.state, [event.target.name]: value });
    this.props.parentCallback({ ...this.state });
  }
  render() {
    return (
      <div className="forms" onChange={this.handleTextChange}>
        <input type="text" placeholder="First Name" name="firstName" />
        <input type="text" placeholder="Last Name" name="lastName" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Phone-Number" name="phone" />
        <input type="text" placeholder="Address" name="address" />
        <input type="text" placeholder="Title" name="title" />
      </div>
    );
  }
}

export default Personal;
