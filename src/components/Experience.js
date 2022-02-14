import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";
import { clearAllInputs } from "./utils/Utils";
import "../assets/Forms.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
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

  handleActive = (event) => {
    this.setState({ active: !this.state.active });
  };
  render() {
    return (
      <div className="forms_container">
        <div className="head">
          <h3>Experience</h3>
          <button type="Button" onClick={this.handleActive} className="show_hide">
            {this.state.active ? (
              <FontAwesomeIcon icon={faAnglesDown} />
            ) : (
              <FontAwesomeIcon icon={faAnglesRight} />
            )}
          </button>
        </div>
        {this.state.active
          ? this.props.jobs.map((index) => {
              return (
                <form className="forms">
                  <div className="deleteContainer">
                    <button type="button" className="delete" onClick={() => this.deleteJob(index)}>
                      X
                    </button>
                  </div>
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
                  <input type = "text"
                    placeholder="Did x job to create y data in z environment"
                    name="roleDescription"
                    onChange={this.handleChange}
                    id={index.id}
                  />

                  <p>Note, use ";" to divide highlights in role experience</p>
                </form>
              );
            })
          : null}
        {this.state.active?<button type="button" className = "addAdditional" onClick={this.handleAdd}>
          + Add Experience
        </button> : null }
      </div>
    );
  }
}
//type

export default Experience;
