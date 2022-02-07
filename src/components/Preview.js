import React, { Component } from "react";
import "../assets/Preview.scss";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }

  render() {
    //console.log(this.props.personal)

    const schools = this.props.education.schools;
    const work = this.props.experience.jobs;
    return (
      <div className="preview">
        <div className="cvHeader">
          <h3>{`${this.props.personal.firstName} ${this.props.personal.lastName}`}</h3>
          <div>
            <div>{this.props.personal.address}</div>
            <div>{`${this.props.personal.phone} | ${this.props.personal.email}`}</div>
          </div>
        </div>
{/*         <SchoolList schools={schools} /> */}
        <WorkList jobs={work} />
      </div>
    );
  }
}

function SchoolList(props) {
  const { schools } = props;
  return (
    <ul className="cvEducation">
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
  const parseRole = () => {

  }
  return (
    <ul className="cvExperience">
      {jobs.map((job) => {
        job.roleDescription.split(";");
        return (
          <li>
            <div className="job_date">
              <span>{job.jobTitle}</span>
              <span>
                {job.startDate} - {job.endDate}
              </span>
            </div>
            <div>{job.company}</div>
            <ul>
              <li>{job.roleDescription}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
export default Preview;
