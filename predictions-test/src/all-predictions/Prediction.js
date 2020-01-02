import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
      <li>
        <span onClick={this.handleToggle}>
          {expectedArrival} – {stationName}
        </span>
        {expanded && (
          <SyntaxHighlighter language="json" style={tomorrow}>
            {JSON.stringify(prediction, null, 2)}
          </SyntaxHighlighter>
        )}
      </li>
    );
  }
}

export default Prediction;
