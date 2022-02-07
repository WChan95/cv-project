import React, { Component, useState } from "react";
import { clearAllInputs } from "./utils/Utils";
import uniqid from "uniqid";

import "../assets/Forms.scss";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  //lets make it so that it can assign ids

  handleChange =(event) =>{
    this.props.eduChange(event);
  }

  handleSubmit = (event) => {
    
    this.props.eduSubmit(event);
  }


  //lets start with a thought experiment (or rather a streamline of thoughts)
  //when initialzing, the state is initially empty
  //right now it relies on the name of the input elements to create properties for
  render() {

    return (
      <div>
        <form className="forms" onSubmit = {this.handleSubmit}>
          <h3>Education</h3>
          <label>University or School Name</label>
          <input
            type="text"
            placeholder="School Name"
            name="schoolName"
            onChange={this.handleChange}
          />
          <label>Date of Graduation</label>
          <input
            type="text"
            placeholder="Date Graduated e.g. May 2014"
            name="dateGraduated"
            onChange={this.handleChange}
          />
          <label>Degree Earned</label>
          <input type="text" placeholder="Degree" name="degree" onChange={this.handleChange} />
          <button>Add Education</button>
        </form>
      </div>
    );
  }
}

export default Education;

//    const {schools} = this.props.education
//console.log({schools})
