import React, { Component } from "react";

import { Preview } from "./Preview";
import "../assets/Menu.scss";

class Menu extends React.PureComponent {
  compoentRef = null;
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
  /*   loadExample = (event) => {
    this.props.genExample(event);
  }; */


  render() {
    return (
      <div>

 {/*        <Preview ref={el => (this.compoentRef = el)} /> */}
        <button type="button" className="print_Preview">
          Preview
        </button>
       {/*  <Preview ref={this.setComponenRef} text={this.state.text}  /> */}
      </div>
    );
  }
}

export default Menu;

/* 
<button type="button" onClick={this.loadExample} className="generate_Example">
Generate Example
</button> */
/* 
   <button type="button" className="download_PDF" onClick={this.handlePrint}>
Download PDF
</button> */
