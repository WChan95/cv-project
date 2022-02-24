import React, { Component, useRef, useState } from "react";

import "../assets/App.scss";
import reactDom from "react-dom";
import uniqid from "uniqid";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
import { Preview } from "./Preview";
/* import Menu from "./Menu"; */
import FormOptions from "./FormOptions";
import ReactToPrint, { useReactToPrint } from "react-to-print";

class App extends Component {
  componentRef = null;
  constructor(props) {
    //This is just a temporary initial state to begin formatting the resume
    super(props);
    this.state = {
      isLoading: false,
      text: "old boring text",
      personal: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "yourEmail@calstate.edu",
        phone: "714-555-2020",
        address: "0120 Your Street, Your City, [CA 99999",
        isActive: true,
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
        isActive: true,
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
        isActive: true,
      },
      technicalSkills: {
        languages: "JavaScript",
        frameworks_libraries: "React.js",
        tools: "git, babel, Webpack",
      },
      isActive: true,
    };
  }

  handleActive = (event) => {
    const name = event.currentTarget.name;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        isActive: !prevState[name].isActive,
      },
    }));
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
    this.setState({
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
    });
  };

  showHide = (event) => {
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        isActive: !prevState.personal.isActive,
      },
      experience: {
        ...prevState.experience,
        isActive: !prevState.experience.isActive,
      },
      education: {
        ...prevState.education,
        isActive: !prevState.education.isActive,
      },
      technicalSkills: {
        ...prevState.technicalSkills,
        isActive: !prevState.technicalSkills.isActive,
      },
    }));
  };

  handleAfterPrint = () => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  };

  handleBeforePrint = () => {
    console.log("`onBeforePrint` called"); // tslint:disable-line no-console
  };

  handleOnBeforeGetContent = () => {
    console.log("`onBeforeGetContent` called"); // tslint:disable-line no-console
    this.setState({ text: "Loading new text...", isLoading: true });

    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({ text: "New, Updated Text!", isLoading: false }, resolve);
      }, 2000);
    });
  };
  reactToPrintTrigger = () => {
    return (
      <button type="button" className="download_PDF">
        Download PDF
      </button>
    );
  };

  setComponentRef = (ref) => {
    this.componentRef = ref;
  };

  reactToPrintContent = () => {
    return this.componentRef;
  };

  render() {
    return (
      <div className="app">
        {/*         <header className="Header">
          <h1>Your Resume Generator</h1>
        </header> */}

        <div className="Form">
          <FormOptions
            genExample={this.generateExample}
            clear={this.clearAll}
            showHide={this.showHide}
            {...this.state}
          />
          <Personal
            personalChange={this.handlePersonal}
            handleActive={this.handleActive}
            {...this.state.personal}
          />
          <Education
            eduAdd={this.handleAddEducation}
            eduChange={this.handleEducation}
            eduDelete={this.handleDeleteEducation}
            handleActive={this.handleActive}
            {...this.state.education}
          />
          <Experience
            expDelete={this.handleDeleteExperience}
            expChange={this.handleExperience}
            expAdd={this.handleAddExperience}
            handleActive={this.handleActive}
            {...this.state.experience}
          />
          <TechnicalSkills
            technicalChange={this.handleTechnical}
            handleActive={this.handleActive}
            {...this.state.technicalSkills}
          />
        </div>

        <div className="Preview">
          <div className="CV_Wrapper">
            {/* {this.state.isLoading && <p className="indicator">onBeforeGetContent: Loading...</p>} */}
            <div>
            <Preview
              ref={this.setComponentRef}
              text={this.state.text}
              {...this.state}
              handleDelete={this.handleDelete}
            />
            </div>

          </div>
          <div className="menu">
              {/* <Menu {...this.state} /> */}
{/*               <button type="button" className="print_Preview">
                Preview
              </button> */}
              <ReactToPrint
                content={this.reactToPrintContent}
                documentTitle="AwesomeFileName"
                onAfterPrint={this.handleAfterPrint}
                onBeforeGetContent={this.handleOnBeforeGetContent}
                onBeforePrint={this.handleBeforePrint}
                removeAfterPrint
                trigger={this.reactToPrintTrigger}
              />
            </div>
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
