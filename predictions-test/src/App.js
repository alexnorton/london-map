import React, { Component } from 'react';
import Line from './Line';

class App extends Component {
  constructor() {
    super();

    this.state = { lines: {} };
  }

  async componentDidMount() {
    const res = await fetch('/predictions.json');
    const predictions = await res.json();

    const lines = {};

    predictions.forEach(prediction => {
      const { lineId, vehicleId } = prediction;

      if (!lines[lineId]) {
        lines[lineId] = {};
      }

      if (!lines[lineId][vehicleId]) {
        lines[lineId][vehicleId] = [];
      }

      lines[lineId][vehicleId].push(prediction);
    });

    this.setState({ lines });
  }

  render() {
    const { lines } = this.state;
    return (
      <div className="App">
        {Object.keys(lines).map(line => (
          <Line key={line} line={line} vehicles={lines[line]} />
        ))}
      </div>
    );
  }
}

export default App;
