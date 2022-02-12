import React from "react";

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''}
    this.handleChange = this.handleChange.bind(this)
    this.buttonHandle = this.buttonHandle.bind(this)
  }

  handleChange(e) {
    this.setState({content: e.target.value})
  }

  buttonHandle() {
    this.setState({content: ''});
    this.props.addTodo(this.state)
  }

  render() {
    
    return (
      <fieldset>
        <legend>Enter your todo:</legend>
        <input value={this.state.content} onChange={this.handleChange}/>
        <button type="button" onClick={this.buttonHandle}>Add Todo</button>
      </fieldset>
      
    )
  }
}

export default InputBar;