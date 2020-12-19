import React from "react";
import BoilerPlate from "./Boilerplate";
import Temperature from "./Temperature";

function toCelcuis(celcuis) {
  return (celcuis * 9) / 5 + 32;
}

function toFahrenheit(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.handleCelcuisChange = this.handleCelcuisChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelcuisChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celcuis =
      scale === "f" ? tryConvert(temperature, toCelcuis) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <Temperature
          scale="c"
          temperature={celcuis}
          onTemperatureChange={this.handleCelcuisChange}
        />
        <Temperature
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilerPlate celcuis={parseFloat(celcuis)} />
      </div>
    );
  }
}

export default Calculator;
