import PropTypes from 'prop-types';
const Statistics = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2> Statistics</h2>
      <p>
        Good: <span>{state.good}</span>
      </p>
      <p>
        Neutral: <span>{state.neutral}</span>
      </p>
      <p>
        Bad: <span>{state.bad}</span>
      </p>
      <p>
        Total: <span>{countTotalFeedback()}</span>
      </p>
      <p>
        Positive feedback:
        <span> {countPositiveFeedbackPercentage()} %</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
export default Statistics;
