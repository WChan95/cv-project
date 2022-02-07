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
              <h3>{school.schoolName}</h3>
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
export default Preview;
