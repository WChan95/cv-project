import React, { Component, useState } from "react";

import "../assets/App.scss";
import reactDom from "react-dom";
import uniqid from "uniqid";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
import Preview from "./Preview";
import Menu from "./Menu";
import FormOptions from "./FormOptions";

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

  generateExample = (event) => {
    this.setState({
      personal: {
        firstName: "John",
        lastName: "Doe",
        email: "johnDoe@gmail.com",
        phone: "714-555-2020",
        address: "0120 Your Street, Your City, CA 94590",
        isActive: "",
      },
      education: {
        schools: [
          {
            schoolName: "University of Nevada, Reno",
            degree: "B.S. Computer Science",
            dateGraduated: "May 2016",
            id: uniqid(),
          },
        ],
      },
      experience: {
        jobs: [
          {
            id: "1",
            jobTitle: "Software Engineer",
            company: "AFinTech",
            location: "Palo Alto, CA",
            startDate: "June 2016",
            endDate: "Present",
            roleDescription:
              "Designed and trained a machine learning model for predicting purchases using PyTorch.;Created resilient infrastructure to stream time data from Amazon backend. ",
          },
          {
            id: "2",
            jobTitle: "Software Engineer Intern",
            company: "23andMe",
            location: "Mountain View, CA",
            startDate: "May 2015",
            endDate: "Aug 2015",
            roleDescription:
              "Implemented Google Protocol buffers as a JSON replacement for communication between services and reduced data payload size by 40%.; Used ReactJs to update 23andMe's purchasing interface.",
          },
          {
            id: "3",
            jobTitle: "Software Engineer Intern",
            company: "Wells Fargo",
            location: "San Francisco, CA",
            startDate: "May 2014",
            endDate: "Aug 2014",
            roleDescription:
              "Implemented Google Protocol buffers as a JSON replacement for communication between services and reduced data payload size by 40%.; Used ReactJs to update Wells Fargo purchasing interface.; Worked on various tickets and bug fixes.",
          },
        ],
      },
      technicalSkills: {
        languages: "JavaScript, Python, Java, C++",
        frameworks_libraries: "React.js, Django, PyTorch, SpringBoot, Vue, BootStrap",
        tools: "git, babel, Webpack, Docker",
      },
    });
  };

  clearAll = (event) => {
    this.setState( {
      personal: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        isActive: "",
      },
      education: {
        schools: [
          {
            schoolName: "",
            degree: "",
            dateGraduated: "",
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
        languages: "",
        frameworks_libraries: "",
        tools: "",
      },
    })
  }

  render() {
    return (
      <div className="app">
        {/*         <header className="Header">
          <h1>Your Resume Generator</h1>
        </header> */}

        <div className="Form">
          <FormOptions genExample={this.generateExample} clear={this.clearAll} />
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

        <div className="Preview">
          <div className="CV_Wrapper">
            <Preview {...this.state} handleDelete={this.handleDelete} />
          </div>
          <Menu />
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
