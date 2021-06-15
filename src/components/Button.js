import PropTypes from "prop-types";

const Button = ({ color, bgColor, text }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  return (
    <button className="btn" style={buttonStyle}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: "#000000",
  bgColor: "#4fcde3",
  text: "undefined",
};
export default Button;
