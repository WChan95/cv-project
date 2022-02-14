import { render } from "@testing-library/react";
import React, { Component } from "react";
import uniqid from "uniqid";
import "../assets/Preview.scss";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
  handleDelete = (event) => {
    this.props.handleDelete(event);
  };
  render() {
    //console.log(this.props.personal)

    const schools = this.props.education.schools;
    const jobs = this.props.experience.jobs;
    const skills = this.props.technicalSkills;

    return (
      <div className="preview">
        <div className="cvHeader">
          <h3>{`${this.props.personal.firstName} ${this.props.personal.lastName}`}</h3>
          <div>
            <div>{this.props.personal.address}</div>
            <div>{`${this.props.personal.phone} | ${this.props.personal.email}`}</div>
          </div>
        </div>
        <SchoolList schools={schools} />
        <WorkList jobs={jobs} />
        <TechnicalSkillsList skills={skills} />
      </div>
    );
  }
}

function SchoolList(props) {
  const { schools } = props;
  return (
    <ul className="cvEducation">
      <div className="sectionHeadings">
        <span>Education</span>
      </div>
      {schools.map((school) => {
        return (
          <li key={school.id}>
            <div className="education">
              <h4>{school.schoolName}</h4>
              <div className="dateDegree">
                <span>{school.degree}</span>
                <span>{school.dateGraduated}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function WorkList(props) {
  const { jobs } = props;
  return (
    <ul className="cvExperience">
      <div className="sectionHeadings">
        <span>Experience</span>
      </div>
      {jobs.map((job) => {
        return (
          <li className="job" key={job.id}>
            <div className="job_date">
              <h4>
                {job.company}, {job.location}
              </h4>
              <span>
                {job.startDate} - {job.endDate}
              </span>
            </div>
            <span className="job_company">{job.jobTitle}</span>
            <ul>
              {job.roleDescription.split(";").map((role) => {
                return <li className="job_Role">{role}</li>;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function TechnicalSkillsList(props) {
  const { skills } = props;
  return (
    <ul className="cvTechnicalSkill">
      <div className="sectionHeadings">
        <span>Technical Skills</span>
      </div>

      <ul>
        <li>
          <span>Languages: {skills.languages}</span>
        </li>
        <li>
          <span>Frameworks: {skills.frameworks_libraries}</span>
        </li>
        <li>Tools: {skills.tools}</li>
      </ul>
    </ul>
  );
}
export default Preview;
