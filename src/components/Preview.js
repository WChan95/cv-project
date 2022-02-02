import React, { Component } from "react";
import "../assets/Preview.scss";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
  render() {
    //console.log(this.props.personal)
    return (
      <div className="preview">
        <div className="cvHeader">
          <h3>{`${this.props.personal.firstName} ${this.props.personal.lastName}`}</h3>
          <div>
            <div>{this.props.personal.address}</div>
            <div>{`${this.props.personal.phone} | ${this.props.personal.stateemail}`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
