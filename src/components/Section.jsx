import PropTypes from 'prop-types';
const Section = props => {
  return (
    <div>
      <h2> {props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
