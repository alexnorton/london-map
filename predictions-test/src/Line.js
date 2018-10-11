import React, { Component, Fragment } from 'react';
import Vehicle from './Vehicle';

class Line extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { line, vehicles } = this.props;
    const { show } = this.state;

    return (
      <Fragment key={line}>
        <h2 onClick={this.handleToggle}>
          {line} {show ? 'x' : '→'}
        </h2>
        {this.state.show &&
          Object.keys(vehicles).map(vehicleKey => (
            <Vehicle
              key={`${line}-${vehicleKey}`}
              line={line}
              vehicleId={vehicleKey}
              predictions={vehicles[vehicleKey]}
            />
          ))}
      </Fragment>
    );
  }
}

export default Line;
