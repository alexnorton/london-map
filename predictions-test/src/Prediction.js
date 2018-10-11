import React, { Component, Fragment } from 'react';

class Prediction extends Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { prediction } = this.props;
    const { expanded } = this.state;
    const { expectedArrival, stationName } = prediction;

    return (
      <li onClick={this.handleToggle}>
        {expectedArrival} – {stationName}
        {expanded && (
          <Fragment>
            <pre>{JSON.stringify(prediction, null, 2)}</pre>
          </Fragment>
        )}
      </li>
    );
  }
}

export default Prediction;
