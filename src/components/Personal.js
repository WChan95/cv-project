import React, { Component, useState } from "react";
import "../assets/Forms.scss";
import reactDom from "react-dom";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.personalChange(event);
  };

  render() {
    return (
      <form className="forms">
        <label>Personal Information</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={this.handleChange}
        />
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} />
        <input
          type="text"
          placeholder="Phone-Number"
          name="phone"
          onChange={this.handleChange}
        />
        <input type="text" placeholder="Address" name="address" onChange={this.handleChange} />
      </form>
    );
  }
}

export default Personal;

/*     this.setState(prevState => ({
      personal:{...prevState.personal, ...childData}
    })) */
