import PropTypes from 'prop-types';
const FeedbackOptions = ({ state, handleClickBtn }) => {
  return (
    <div>
      {state.map(name => (
        <button key={name} onClick={() => handleClickBtn(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};

// import { Component } from 'react';

// class FeedbackOptions extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   handleClickGood = () =>
//     this.setState(prevState => {
//       return { good: prevState.good + 1 };
//     });
//   handleClickNeutral = () =>
//     this.setState(prevState => {
//       return { neutral: prevState.neutral + 1 };
//     });
//   handleClickBad = () =>
//     this.setState(prevState => {
//       return { bad: prevState.bad + 1 };
//     });
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClickGood}>Good</button>
//         <button onClick={this.handleClickNeutral}>Neutral</button>
//         <button onClick={this.handleClickBad}>Bad</button>
//       </div>
//     );
//   }
// }

FeedbackOptions.propTypes = {
  state: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};
export default FeedbackOptions;
