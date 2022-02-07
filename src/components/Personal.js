import React, { Component, useState } from "react";
import { handleTextChange } from "./utils/Utils";
import "../assets/Forms.scss"
import reactDom from "react-dom";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleTextChange = handleTextChange.bind(this)
  }

  

  render() {
    return (
      <form className="forms" onChange={this.handleTextChange}>
        <label>
          Personal Information
        </label>
        <input type="text" placeholder="First Name" name="firstName" />
        <input type="text" placeholder="Last Name" name="lastName" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Phone-Number" name="phone" />
        <input type="text" placeholder="Address" name="address" />
      </form>
    );
  }
}

export default Personal;

/*     this.setState(prevState => ({
      personal:{...prevState.personal, ...childData}
    })) */