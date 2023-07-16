const Section = props => {
  return (
    <div>
      <h2> {props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};
export default Section;
