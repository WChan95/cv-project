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
        schools: [],
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
      technicalSkills: {
        languages: "",
        frameworks_libraries: "",
        tools: "",
      },
    };
  }
  //schoolName: "California State University, Fullerston", degree:"Bachelor of Science, Computer Science", dateGraduated:"May 2010"
  handlePersonal = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      personal: { ...prevState.personal, [name]: value },
    }));
  };

  handleEducation = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        school: {
          ...prevState.education.school,
          [name]: value,
        },
      },
    }));
  };

  submitEducation = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        schools: [...prevState.education.schools, this.state.education.school],
      },
    })); //this actually works
    /*     this.setState({education:{
      schools: {schools}
    }}) */

    /*   this.setState((prevState) => ({
      education: {
        ...prevState.education.schools,
        school,
      },
    })); */ //this doesn't work
  };

  handleExperience = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      experience: { job: { ...prevState.experience.job, [name]: value } },
    }));
  };

  submitExperience = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        jobs: [...prevState.experience.jobs, this.state.experience.job],
      },
    }));
  };

  handleTechnical = (event) => {
    const {name, value} = event.target;
    this.setState(prevState => ({
      technicalSkills:{...prevState.technicalSkills, [name]: value}
    }))
  }

  render() {
    return (
      <div className="app">
        <div>
          <div>
            <button>Show/Hide</button>
            <Personal personalChange={this.handlePersonal} />
          </div>

          <Education eduChange={this.handleEducation} eduSubmit={this.submitEducation} />
          <Experience expChange={this.handleExperience} expSubmit={this.submitExperience} />
          <TechnicalSkills technicalChange={this.handleTechnical} />
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
