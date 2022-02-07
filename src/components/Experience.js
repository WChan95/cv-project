import { render } from "@testing-library/react";
import React, { Component } from "react";
import { clearAllInputs } from "./utils/Utils";
import "../assets/Forms.scss";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: { jobTitle: "", location: "", startDate: "", endDate: "", roleDescription: "" },
      jobs: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      job: { ...prevState.job, [name]: value },
    }));
  };
  handleParent = (event) => {
    event.preventDefault();
    this.setState({
      jobs: this.state.jobs.concat(this.state.job),
      job: { jobTitle: "", company:"", location: "", startDate: "", endDate: "", roleDescription: "" },
    });
    clearAllInputs(); //clears all input forms after submittal
    this.props.parentCallback({ ...this.state });
  };


  render() {
    return (
      <form className="forms" onSubmit={this.handleParent}>
        <h3>Experience</h3>
        <label>Job Title </label>
        <input
          type="text"
          placeholder="Staff Engineer 1"
          name="jobTitle"
          onChange={this.handleChange}
        />
        <label>Company</label>
        <input
          type="text"
          placeholder="Apple"
          name="company"
          onChange={this.handleChange}
        />

        <label>City, State </label>
        <input
          type="text"
          placeholder="Cupertino, CA"
          name="location"
          onChange={this.handleChange}
        />
        {/* For Start and end date forms */}
        <label>Start Date</label>
        <input type="date" name="startDate" onChange={this.handleChange} />
        <label>End Date</label>
        <input type="date" name="endDate" />

        <label>Role Description</label>
        <textarea
          placeholder="Did x job to create y data in z environment"
          name="roleDescription"
          onChange={this.handleChange}
        />
        <p>Note, use ";" to divide highlights in role experience</p>
        
        <button>Submit</button>
      </form>
    );
  }
}

export default Experience;
