import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";
import { clearAllInputs } from "./utils/Utils";
import "../assets/Forms.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faBriefcase, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

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
    this.props.handleActive(event);
  };
  render() {
    return (
      <div className="forms_container">
        <div className="head">
          <h3 className="icon_name">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Experience</span>
          </h3>
          <button type="Button" onClick={this.handleActive} name="experience" className="show_hide">
            {this.props.isActive ? (
              <FontAwesomeIcon icon={faAnglesDown} />
            ) : (
              <FontAwesomeIcon icon={faAnglesRight} />
            )}
          </button>
        </div>
        {this.props.isActive
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
                    value={index.jobTitle}
                  />
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Apple"
                    name="company"
                    onChange={this.handleChange}
                    id={index.id}
                    value={index.company}
                  />

                  <label>City, State </label>
                  <input
                    type="text"
                    placeholder="Cupertino, CA"
                    name="location"
                    onChange={this.handleChange}
                    id={index.id}
                    value={index.location}
                  />
                  {/* For Start and end date forms */}
                  <div></div>
{/*                   <div className="currentRole">
                    <span>Current Role?</span>
                    <input
                      type="checkbox"
                      value="Present"
                      id={index.id}
                      name="endDate"
                      onChange={this.handleChange}
                    />
                  </div> */}
                  <label>End Date</label>
                  <input type="text" name="endDate" onChange={this.handleChange} id={index.id} value={index.endDate} />

                  <label>Start Date</label>
                  <input type="text" name="startDate" onChange={this.handleChange} id={index.id} value={index.startDate} />

                  <label>Role Description</label>
                  <textarea
                    placeholder="Did x job to create y data in z environment"
                    name="roleDescription"
                    onChange={this.handleChange}
                    id={index.id}
                    value={index.roleDescription}
                  />

                  <p>Note, use ";" to divide highlights in role experience</p>
                </form>
              );
            })
          : null}
        {this.state.active ? (
          <div className="button-wrapper">
            {" "}
            <button className="addAdditional" type="button" onClick={this.handleAdd}>
              + Add Experience
            </button>
            {/*             <button className="clear" type="button" onClick={this.handleAdd}>
               Clear
             </button> */}
          </div>
        ) : null}
      </div>
    );
  }
}
//type

export default Experience;
