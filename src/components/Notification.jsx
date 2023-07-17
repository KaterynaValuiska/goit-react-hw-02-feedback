import PropTypes from 'prop-types';
import css from './Feedback.module.css';
const Notification = props => {
  return (
    <div>
      <h2> Statistics</h2>
      <p className={css.notification}> {props.message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
