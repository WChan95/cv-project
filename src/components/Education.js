import React, { Component, useState } from "react";
import { clearAllInputs } from "./utils/Utils";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import "../assets/Forms.scss";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }

  //lets make it so that it can assign ids

  handleChange = (event) => {
    this.props.eduChange(event);
  };

  handleAdd = (event) => {
    this.props.eduAdd(event);
  };

  handleDelete = (event) => {
    this.props.eduDelete(event);
  };

  handleActive = (event) => {
    this.setState({ active: !this.state.active });
  };
  //lets start with a thought experiment (or rather a streamline of thoughts)
  //when initialzing, the state is initially empty
  //right now it relies on the name of the input elements to create properties for
  render() {
    const schools = this.props.schools;
    return (
      <div className="forms_container">
        <div className="head">
          <h3>Education</h3>
          <button type="Button" onClick={this.handleActive} className="show_hide">
            {this.state.active ? (
              <FontAwesomeIcon icon={faAnglesDown} />
            ) : (
              <FontAwesomeIcon icon={faAnglesRight} />
            )}
          </button>
        </div>
        {this.state.active
          ? schools.map((school) => {
              return (
                <div>
                  <div className="deleteContainer">
                    <button
                      className="delete"
                      type="button"
                      onClick={() => this.handleDelete(school)}
                    >
                      X
                    </button>
                  </div>

                  <form className="forms">
                    <label>University or School Name</label>
                    <input
                      type="text"
                      placeholder="School Name"
                      name="schoolName"
                      id={school.id}
                      onChange={this.handleChange}
                    />
                    <label>Date of Graduation</label>
                    <input
                      type="text"
                      placeholder="Date Graduated e.g. May 2014"
                      name="dateGraduated"
                      id={school.id}
                      onChange={this.handleChange}
                    />
                    <label>Degree Earned</label>
                    <input
                      type="text"
                      placeholder="Degree"
                      name="degree"
                      id={school.id}
                      onChange={this.handleChange}
                    />
                  </form>
                </div>
              );
            })
          : null}
        <button className="addAdditional" type="button" onClick={this.handleAdd}>
          Add Education
        </button>
      </div>
    );
  }
}

export default Education;

//    const {schools} = this.props.education
//console.log({schools})
