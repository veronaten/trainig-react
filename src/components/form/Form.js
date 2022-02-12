import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnchange = this.handleOnchange.bind(this)
  }

  handleSubmit(event) {
    alert('Your name:' + this.state.value)
    event.PreventDefault()
  }

  handleOnchange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' value={this.state.value} onChange={this.handleOnchange}></input>
        </label>
        <input type='submit' value='Send'></input>
      </form>
    )
  }
}

export default Form
