import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.timeLeft == 0 || this.props.timeLeft == null) {
      return (
        <div>
          Timer:
          {this.props.time}
        </div>
      );
    }
  }
}

export default Timer;
