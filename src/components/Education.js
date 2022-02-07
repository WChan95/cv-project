import React, { Component, useState } from "react";
import { clearAllInputs } from "./utils/Utils";
import uniqid from "uniqid";

import "../assets/Forms.scss";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: { schoolName: "", degree: "", dateGraduate: "", id: uniqid() },
      schools: [],
    };
  }

  //lets make it so that it can assign ids
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      school: { ...prevState.school, [name]: value },
    }));
  };

  handleParent = (event) => {
    event.preventDefault();
    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: { schoolName: "", degree: "", dateGraduate: "", id: uniqid() },
    });

    clearAllInputs(); //clears all input forms after submittal
    this.props.parentCallback({ ...this.state });
  };

  //lets start with a thought experiment (or rather a streamline of thoughts)
  //when initialzing, the state is initially empty
  //right now it relies on the name of the input elements to create properties for
  render() {
    return (
      <div>
        <form className="forms" onSubmit={this.handleParent}>
          <h3>Education</h3>
          <label>
            <span>University or School Name</span>
            <input
              type="text"
              placeholder="School Name"
              name="schoolName"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Date of Graduation</span>
            <input
              type="text"
              placeholder="Date Graduated e.g. May 2014"
              name="dateGraduated"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Degree Earned</span>
            <input type="text" placeholder="Degree" name="degree" onChange={this.handleChange} />
          </label>
          <button>Add Education</button>
        </form>
      </div>
    );
  }
}

export default Education;

//    const {schools} = this.props.education
//console.log({schools})
