import React, { Component } from 'react';
import Line from './Line';

class AllPredictions extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentDidMount() {
    const res = await fetch(
      'https://api.tfl.gov.uk/mode/tube/arrivals?count=-1'
    );
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
        {lines
          ? Object.keys(lines).map(line => (
              <Line key={line} line={line} vehicles={lines[line]} />
            ))
          : 'Loading...'}
      </div>
    );
  }
}

export default AllPredictions;
