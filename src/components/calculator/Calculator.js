import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from './BoilingVerdict';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'c'}
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }

  handleFarenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }
  
  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const farenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={farenheit} onTemperatureChange={this.handleFarenheitChange}/>
        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </div>
    )
  } 
  
}

export default Calculator