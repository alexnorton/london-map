import React, { Component } from 'react';

const REFRESH_RATE = 10;

class VehicleUpdates extends Component {
  constructor() {
    super();

    this.state = {
      lastTime: null,
      vehicles: {},
      countDown: REFRESH_RATE,
      fetching: true,
    };

    this.updateData = this.updateData.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  async componentDidMount() {
    await this.updateData();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  countDown(start) {
    if (!start && this.state.countDown === 1) {
      this.updateData();
      return;
    }
    this.setState({ countDown: start || this.state.countDown - 1 });
    this.timeout = setTimeout(this.countDown, 1000);
  }

  async updateData() {
    console.log('Fetching predictions');

    this.setState({ fetching: true });

    const res = await fetch(
      'https://api.tfl.gov.uk/mode/tube/arrivals?count=-1'
    );

    const predictions = await res.json();

    const predictionsTime = new Date(predictions[0].timestamp);

    let stateUpdate;

    if (predictionsTime <= this.state.lastTime) {
      stateUpdate = { stale: true };
      console.log('Got stale predictions');
    } else {
      stateUpdate = { stale: false, lastTime: predictionsTime };

      console.log('Got fresh predictions');

      const victoriaLinePredictions = predictions.filter(
        ({ lineId }) => lineId === 'victoria'
      );

      const vehicleIds = victoriaLinePredictions.reduce(
        (currentIds, { vehicleId }) => {
          if (currentIds.indexOf(vehicleId) === -1) {
            return [...currentIds, vehicleId];
          }
          return currentIds;
        },
        []
      );

      console.log(vehicleIds);

      // victoriaLinePredictions.forEach(prediction => {
      //   const { lineId, vehicleId } = prediction;
      // });
    }

    this.setState({ ...stateUpdate, fetching: false });

    this.countDown(REFRESH_RATE);
  }

  render() {
    return (
      <div>
        <strong>Most recent predictions: </strong>
        {this.state.lastTime && this.state.lastTime.toISOString()}
        <br />
        {this.state.fetching
          ? 'Fetching...'
          : `Next fetch in ${this.state.countDown}`}
        {this.state.stale &&
          !this.state.fetching && (
            <>
              <br />
              Got stale data
            </>
          )}
      </div>
    );
  }
}

export default VehicleUpdates;
