import React, { Component } from "react";
import "../assets/Forms.scss";

class TechnicalSkills extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (event) => {
    this.props.technicalChange(event);
    this.state = {active: true};
  };
  render() {
    return (
      <div className="forms_container">
        <form className ="forms" >
          <label>Languages</label>
          <input
            type="text"
            name="languages"
            placeholder="Java,JavaScript, Python, Go, and etc."
            onChange={this.handleChange}
          />

          <label>Frameworks/Libraries</label>
          <input
            type="text"
            name="frameworks_libraries"
            placeholder="React.js SpringBoot, Flask, vue.js"
            onChange={this.handleChange}
          />
          <label>Tools</label>
          <input
            type="text"
            name="tools"
            placeholder="git, babel, Webpack, Docker, AWS"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default TechnicalSkills;

//Languages, frameworks, and tools
