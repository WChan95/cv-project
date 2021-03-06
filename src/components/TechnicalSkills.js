import React, { Component } from "react";
import "../assets/Forms.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

class TechnicalSkills extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
  handleChange = (event) => {
    this.props.technicalChange(event);
  };

  handleActive = (event) => {
    this.props.handleActive(event);
  };
  render() {
    return (
      <div className="forms_container">
        <div className="head">
          <h3 className="icon_name">
            <FontAwesomeIcon icon = {faWrench} />
            <span>Technical Skills</span>
          </h3>
          <button type="Button" onClick={this.handleActive} name="technicalSkills" className="show_hide">
            {this.props.isActive ? (
              <FontAwesomeIcon icon={faAnglesDown} />
            ) : (
              <FontAwesomeIcon icon={faAnglesRight} />
            )}
          </button>
        </div>
        {this.props.isActive ? (
          <form className="forms">
            <label>Languages</label>
            <input
              type="text"
              name="languages"
              placeholder="Java,JavaScript, Python, Go, and etc."
              onChange={this.handleChange}
              value={this.props.languages}
              
            />

            <label>Frameworks/Libraries</label>
            <input
              type="text"
              name="frameworks_libraries"
              placeholder="React.js SpringBoot, Flask, vue.js"
              onChange={this.handleChange}
              value={this.props.frameworks_libraries}
            />
            <label>Tools</label>
            <input
              type="text"
              name="tools"
              placeholder="git, babel, Webpack, Docker, AWS"
              onChange={this.handleChange}
              value={this.props.tools}
            />
          </form>
        ) : null}
      </div>
    );
  }
}

export default TechnicalSkills;

//Languages, frameworks, and tools
