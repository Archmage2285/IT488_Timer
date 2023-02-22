import React from "react";
import Button from "./Button";
import Timer from "./Timer";

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null
    };
  }
  startTimer = (timeLeft) => {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      let timeLeft = this.state.timeLeft - 1;
      if (timeLeft === 0) {
        clearInterval(this.state.timer);
      }
      this.setState({ timeLeft: timeLeft });
    }, 1000);
    return this.setState({ timer: timer, timeLeft: timeLeft });
  };

  render() {
    return (
      <div>
        <Button time="350" startTimer={this.startTimer} />
        <Button time="600" startTimer={this.startTimer} />
        <Button time="1200" startTimer={this.startTimer} />
        <Timer time={this.state.timeLeft} />
      </div>
    );
  }
}

export default TimerWrapper;
