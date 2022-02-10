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
    //This is just a temporary initial state to begin formatting the resume
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
          schoolName: "University of California, Riverside",
          degree: "B.S. Information Systems",
          dateGraduated: "May 2016",
          id: uniqid(),
        },
        schools: [
          {
            schoolName: "University of California, Riverside",
            degree: "B.S. Information Systems",
            dateGraduated: "May 2016",
            id: uniqid(),
          },
        ],
      },
      experience: {
        job: { jobTitle: "" },
        jobs: [
          {
            id: "",
            jobTitle: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            roleDescription:
              "",
          },

        ],
      },
      technicalSkills: {
        languages: "JavaScript",
        frameworks_libraries: "React.js",
        tools: "git, babel, Webpack",
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
      experience: {
        ...prevState.experience,
        jobs: prevState.experience.jobs.map((job) => {
          if (job.id === event.target.id) {
            return { ...job, [name]: value };
          }
          return job;
        }),
      },
    }));
  };

  handleAddExperience = (event) => {

    this.setState(prevState => ({
      experience:{...prevState.experience, jobs:[...prevState.experience.jobs,{id:uniqid()} ]}
    }))

  }


  handleDelete = (event) => {
    //this.state.experience.jobs.splice(event,1)
    const newArr = this.state.experience.jobs.filter((job) => job.id != event.id);
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        jobs: [...newArr],
      },
    }));
  };

  handleTechnical = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      technicalSkills: { ...prevState.technicalSkills, [name]: value },
    }));
  };

  render() {
    return (
      <div className="app">
        <div>
          <div>
            <button>Show/Hide</button>
            <Personal personalChange={this.handlePersonal} />
          </div>

          <Education eduChange={this.handleEducation} eduSubmit={this.submitEducation} />
          <Experience
            expDelete={this.handleDelete}
            expChange={this.handleExperience}
            expAdd={this.handleAddExperience}
            {...this.state.experience}
          />
          <TechnicalSkills technicalChange={this.handleTechnical} />
        </div>
        <div>
          <Preview {...this.state} handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;

//arrow functions can't touch this
//Does it change? Probably state
//No? Probably prop
