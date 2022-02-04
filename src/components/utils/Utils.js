
//utils.js

export function handleTextChange(event){
    event.preventDefault();
    const value = event.target.value;
    this.setState({ ...this.state, [event.target.name]: value });
    this.props.parentCallback({ ...this.state });
  }

  