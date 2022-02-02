import React, { Component, useState } from "react";
import Personal from "./Personal";
import Preview from "./Preview";
import "../assets/App.scss";
import reactDom from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "yourEmail@calstate.edu",
        phone: "714-555-2020",
        address: "0120 Your Street, Your City, CA 99999",
        title: "",
      },
    };
  }

  handleChild = (childData) => {
    this.setState(...childData)

  };

  getPrevPersonal = (prevState) => {};

  render() {
    return (
      <div className="app">
        <div>
          <Personal parentCallback={this.handleChild} />
        </div>
        <div>
          <Preview {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;

//arrow functions can't touch this
//Does it change? Probably state
//No? Probably prop
