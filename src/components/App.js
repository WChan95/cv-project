import React, { Component, useState } from "react";

import "../assets/App.scss";
import reactDom from "react-dom";
import uniqid from "uniqid";

import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
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
        school: {
          schoolName: "",
          degree: "",
          dateGraduated: "",
          id: uniqid(),
        },
        schools: [
          {
            schoolName: "University of Somewhere, Elsewhere",
            degree: "BS Information Systems",
            dateGraduated: "May 2020",
            id: uniqid(),
          },
        ],
      },
      experience: {
        job: { jobTitle: "" },
        jobs: [
          {
            jobTitle: "Software Engineer",
            company: "Apple",
            location: "Cupertino, CA",
            startDate: "Mar 2020",
            endDate: "Present",
            roleDescription:
              "I built stuff for Apple;\nI built stuff for Apple 2;I Built stuff for apple 3",
          },
        ],
      },
    };
  }
  //schoolName: "California State University, Fullerston", degree:"Bachelor of Science, Computer Science", dateGraduated:"May 2010"
  handlePersonal = (childData) => {
    this.setState((prevState) => ({
      personal: { ...prevState.personal, ...childData },
    }));
  };

  handleEducation = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      education: {
        school: {
          ...prevState.education.school,
          [name]: value,
        },
      },
    }));
  };

  submitEducation = (event) => {
    event.preventDefault();
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
          <div>
            <button>Show/Hide</button>
            <Personal parentCallback={this.handlePersonal} />
          </div>

          <Education eduChange={this.handleEducation} eduSubmit={this.submitEducation} />
          <Experience parentCallback={this.handleExperience} />
          <TechnicalSkills />
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
