import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () =>
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  handleClickNeutral = () =>
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  handleClickBad = () =>
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    if (this.countTotalFeedback()) {
      positiveFeedback = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );

      return positiveFeedback;
    }
    return positiveFeedback;
  };
  render() {
    return (
      <div>
        <div>
          <h2> Please leave feedback</h2>
          <button onClick={this.handleClickGood}>Good</button>
          <button onClick={this.handleClickNeutral}>Neutral</button>
          <button onClick={this.handleClickBad}>Bad</button>
        </div>
        <div>
          <h2> Statistics</h2>
          <p>
            Good: <span>{this.state.good}</span>
          </p>
          <p>
            Neutral: <span>{this.state.neutral}</span>
          </p>
          <p>
            Bad: <span>{this.state.bad}</span>
          </p>
          <p>
            Total: <span>{this.countTotalFeedback()}</span>
          </p>
          <p>
            Positive feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage()} %</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
