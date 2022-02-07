import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../assets/Forms.scss";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {job:{jobTitle:"", location:"",startDate:"",endDate:"",roleDescription:""},jobs:[]};
  }

  handleChange = (event) => {
    
    const {name, value} = event.target;
    this.setState((prevState) => ({
      job:{...prevState.job, [name]:value}
    }))
    
  };

  handleParent = (event) => {
    event.preventDefault();
    this.setState({
      jobs:this.state.jobs.concat(this.state.job),
      job:{obTitle:"", location:"",startDate:"",endDate:"",roleDescription:""}
    })
    this.props.parentCallback({...this.state})

  }

  render() {
    return (
      <form className="forms" onSubmit={this.handleParent}>
        <h3>Experience</h3>
        <label>
          Job Title
          <input type="text" placeholder="Staff Engineer 1" name="jobTitle" onChange={this.handleChange} value={this.state.jobTitle}/>
        </label>
        <label>
          City, State
          <input type="text" placeholder="Cupertino, CA" name="location" onChange={this.handleChange} />
        </label>
        <label>
          <span>
            Start Date <input type="date" name = "startDate" onChange={this.handleChange}></input>
          </span>
          <span>
            End Date <input type="date"  name = "endDate" />
          </span>
        </label>
        <label>
          Role Description
          <textarea placeholder="Did x job to create y data in z environment" onChange={this.handleChange} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default Experience;
