import React, { Component } from "react";
import "../assets/Menu.scss"

class FormOptions extends Component {
  constructor(props) {
    super(props);
  }

  generateExample = (event) => {
      this.props.genExample(event)
  }

  clearAll = (event) => {
    this.props.clear(event);
  }
  render() {
    return (
      <div className="form_menu">
        <button type="button" onClick={this.generateExample} className="generate_Example">
          Generate Example
        </button>
        <button type="button" className="clear_All" onClick = {this.clearAll}>
          Clear All
        </button>
      </div>
    );
  }
}

export default FormOptions;
