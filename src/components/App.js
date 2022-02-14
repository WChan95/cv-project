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
        isActive: "",
      },
      education: {
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
        jobs: [
          {
            id: "1",
            jobTitle: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            roleDescription: "",
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

  handleActive = (event) => {
    console.log(event.target);
  };
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
        schools: prevState.education.schools.map((school) => {
          if (school.id === event.target.id) {
            return { ...school, [name]: value };
          }
          return school;
        }),
      },
    }));
  };

  handleAddEducation = (event) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        schools: [...prevState.education.schools, { id: uniqid() }],
      },
    }));
  };

  handleDeleteEducation = (event) => {
    //this.state.experience.jobs.splice(event,1)
    const newArr = this.state.education.schools.filter((school) => school.id !== event.id);
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        jobs: [...newArr],
      },
    }));
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
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        jobs: [
          ...prevState.experience.jobs,
          {
            id: uniqid(),
            jobTitle: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            roleDescription: "",
          },
        ],
      },
    }));
  };

  handleDeleteExperience = (event) => {
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
{/*         <header className="Header">
          <h1>Your Resume Generator</h1>
        </header> */}
        <div className="Form">
          <Personal personalChange={this.handlePersonal} toggleActive={this.handleActive} />
          <Education
            eduAdd={this.handleAddEducation}
            eduChange={this.handleEducation}
            eduDelete={this.handleDeleteEducation}
            {...this.state.education}
          />
          <Experience
            expDelete={this.handleDeleteExperience}
            expChange={this.handleExperience}
            expAdd={this.handleAddExperience}
            {...this.state.experience}
          />
          <TechnicalSkills technicalChange={this.handleTechnical} />
        </div>
        <div className="CV">
          <Preview {...this.state} handleDelete={this.handleDelete} />
        </div>
       {/*  <footer className="Footer">Your Footer Here</footer> */}
      </div>
    );
  }
}

export default App;

//arrow functions can't touch this
//Does it change? Probably state
//No? Probably prop
