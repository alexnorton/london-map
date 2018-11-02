import React, { Fragment } from 'react';
import Prediction from './Prediction';

const Vehicle = ({ line, vehicleId, predictions }) => {
  const {
    direction,
    destinationName,
    currentLocation,
    towards,
  } = predictions[0];
  return (
    <Fragment>
      <h3>{vehicleId}</h3>
      <p>
        <strong>Direction</strong>: {direction}
        <br />
        <strong>Destination</strong>: {destinationName}
        <br />
        <strong>Current location</strong>: {currentLocation}
        <br />
        <strong>Towards</strong>: {towards}
      </p>
      <h4>Predicted arrival times</h4>
      <ul>
        {predictions
          .sort(
            (a, b) => new Date(a.expectedArrival) - new Date(b.expectedArrival)
          )
          .map((prediction, index) => (
            <Prediction prediction={prediction} key={index} />
          ))}
      </ul>
    </Fragment>
  );
};

export default Vehicle;
