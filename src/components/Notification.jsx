import PropTypes from 'prop-types';
const Notification = props => {
  return (
    <div>
      <h2> Statistics</h2>
      <p> {props.message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
