import React, { Component } from "react";
import "../assets/Forms.scss";

class TechnicalSkills extends Component {
  render() {
    return (
      <form className="forms">
        <label>Languages</label>
        <input type="text" name="languages" placeholder="Java,JavaScript, Python, Go, and etc." />

        <label>Frameworks/Libraries</label>
        <input
          type="text"
          name="frameworks_libraries"
          placeholder="React.js SpringBoot, Flask, vue.js"
        />
        <label>Tools</label>
        <input type="text" name="tools" placeholder="git, babel, Webpack, Docker, AWS" />

        <button>Submit</button>
      </form>
    );
  }
}

export default TechnicalSkills;

//Languages, frameworks, and tools
