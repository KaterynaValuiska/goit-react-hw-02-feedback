import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  ClickBtn = name => {
    this.setState(lastState => {
      return {
        [name]: lastState[name] + 1,
      };
    });
  };
  //   handleClickGood = () =>
  //     this.setState(prevState => {
  //       return { good: prevState.good + 1 };
  //     });

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
          <Section title="Pleasa leave feedback">
            <FeedbackOptions
              state={Object.keys(this.state)}
              handleClickBtn={this.ClickBtn}
            />
            {this.countTotalFeedback() !== 0 ? (
              <Statistics
                state={this.state}
                countTotalFeedback={this.countTotalFeedback}
                countPositiveFeedbackPercentage={
                  this.countPositiveFeedbackPercentage
                }
              />
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </div>
      </div>
    );
  }
}

export default Feedback;
