import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";
import { clearAllInputs } from "./utils/Utils";
import "../assets/Forms.scss";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.expChange(event);
  };
  handleAdd = (event) => {
    this.props.expAdd(event);
  };

  deleteJob = (event) => {
    this.props.expDelete(event);
  };
  render() {
    return (
      <div className="forms">
        {this.props.jobs.map((index) => {
          return (
            <form className="forms">
              <button type="button" onClick={() => this.deleteJob(index)}>
                X
              </button>
              <h3>Experience</h3>
              <label>Job Title </label>
              <input
                type="text"
                placeholder="Staff Engineer 1"
                name="jobTitle"
                onChange={this.handleChange}
                id={index.id}
              />
              <label>Company</label>
              <input
                type="text"
                placeholder="Apple"
                name="company"
                onChange={this.handleChange}
                id={index.id}
              />

              <label>City, State </label>
              <input
                type="text"
                placeholder="Cupertino, CA"
                name="location"
                onChange={this.handleChange}
                id={index.id}
              />
              {/* For Start and end date forms */}
              <label>Start Date</label>
              <input type="date" name="startDate" onChange={this.handleChange} id={index.id} />
              <label>End Date</label>
              <input type="date" name="endDate" onChange={this.handleChange} id={index.id} />

              <label>Role Description</label>
              <textarea
                placeholder="Did x job to create y data in z environment"
                name="roleDescription"
              />

              <p>Note, use ";" to divide highlights in role experience</p>
            
            </form>
          );
        })}
        <button type="button" onClick = {this.handleAdd}>Add additional experience</button>
      </div>
    );
  }
}
//type

export default Experience;
