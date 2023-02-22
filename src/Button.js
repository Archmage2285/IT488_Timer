import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  startTimer = (event) => {
    return this.props.startTimer(this.props.time);
  };

  render() {
    console.log(this.props.startTimer);
    return (
      <div>
        <button type="button" onClick={this.startTimer.bind(this)}>
          {this.props.time} Seconds
        </button>
      </div>
    );
  }
}

export default Button;
