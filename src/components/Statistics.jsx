const Statistics = props => {
  return (
    <div>
      <h2> Statistics</h2>
      <p>
        Good: <span>{props.good}</span>
      </p>
      <p>
        Neutral: <span>{props.neutral}</span>
      </p>
      <p>
        Bad: <span>{props.bad}</span>
      </p>
      <p>
        Total: <span>{props.countTotalFeedback}</span>
      </p>
      <p>
        Positive feedback:
        <span> {props.countPositiveFeedbackPercentage} %</span>
      </p>
    </div>
  );
};

export default Statistics;
