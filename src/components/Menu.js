import React, { Component } from "react";
import "../assets/Menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
/*   loadExample = (event) => {
    this.props.genExample(event);
  }; */
  render() {
    return (
      <div className="menu">

        <button type="button" className="print_Preview">
          Preview
        </button>
        <button type="button" className="download_PDF">
          Download PDF
        </button>
      </div>
    );
  }
}

export default Menu;

/* 
<button type="button" onClick={this.loadExample} className="generate_Example">
Generate Example
</button> */