import React from "react";
import Counter from "../counter/Counter";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handkeClick = this.handkeClick.bind(this)
  }

  handkeClick() {
    this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}))
  }
  render () {
    return (
      <button 
        className="button" 
        type="button" 
        onClick={this.handkeClick}>
          {this.state.isToggleOn ? "Start" : "Stop"}
          {this.state.isToggleOn ? null : <Counter />}
      </button>
    )
  }
  
};

export default Button;