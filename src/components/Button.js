import PropTypes from "prop-types";

const Button = ({ color, bgColor, text, onClick }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <button onClick={onClick} className="btn" style={buttonStyle}>
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "#000000",
  bgColor: "#4fcde3",
  text: "undefined",
};
export default Button;
