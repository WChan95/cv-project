import React, { Component, useState } from "react";
import "../assets/Forms.scss";
import reactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  handleChange = (event) => {
    this.props.personalChange(event);
  };

  handleActive = (event) => {
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <div className="forms_container">
        <div className="head">
          <h3 className ="icon_name">
            <FontAwesomeIcon icon={faUser} />
            <span>Personal Information</span>
          </h3>
          <button type="Button" onClick={this.handleActive} className="show_hide">
            {this.state.active ? (
              <FontAwesomeIcon icon={faAnglesDown} />
            ) : (
              <FontAwesomeIcon icon={faAnglesRight} />
            )}
          </button>
        </div>

        {this.state.active ? (
          <form className="forms">
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
        ) : null}
      </div>
    );
  }
}

export default Personal;

/*     this.setState(prevState => ({
      personal:{...prevState.personal, ...childData}
    })) */
