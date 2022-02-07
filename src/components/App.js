import React, { Component, useState } from "react";

import "../assets/App.scss";
import reactDom from "react-dom";

import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "yourEmail@calstate.edu",
        phone: "714-555-2020",
        address: "0120 Your Street, Your City, [CA 99999",
      },
      education: {
        schools: [
          {
            schoolName: "University of South Florida",
            degree: "BS Political Science",
            dateGraduated: "May 2020",
            id: "0",
          },
        ],
      },
      experience: {
        jobs: [{}],
      },
    };
  }
  //schoolName: "California State University, Fullerton", degree:"Bachelor of Science, Computer Science", dateGraduated:"May 2010"
  handlePersonal = (childData) => {
    this.setState((prevState) => ({
      personal: { ...prevState.personal, ...childData },
    }));
  };

  handleEducation = (childData) => {
    this.setState((prevState) => ({
      education: { ...prevState.education.schools, ...childData },
    }));
  };

  handleExperience = (childData) => {
    this.setState((prevState) => ({
      experience: { ...prevState.experience.jobs, ...childData },
    }));
  }; 
  render() {
    return (
      <div className="app">
        <div>
          <Personal parentCallback={this.handlePersonal} />
          <Education parentCallback={this.handleEducation} />
          <Experience parentCallback={this.handleExperience} />
        </div>
        <div>
          <Preview {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;

//arrow functions can't touch this
//Does it change? Probably state
//No? Probably prop
