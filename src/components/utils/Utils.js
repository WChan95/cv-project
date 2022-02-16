
//utils.js

export function handleTextChange(event){
    event.preventDefault();
    const value = event.target.value;
    this.setState({ ...this.state, [event.target.name]: value });
    this.props.parentCallback({ ...this.state });
  }


  export const clearAllInputs = () =>{
    Array.from(document.querySelectorAll("input")).forEach((input) => (input.value = ""));
  }

