import PropTypes from "prop-types";

const Header = ({ title, description }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: "Task Tracker",
  description:
    "This is a task tracker mini-application that extensively uses the latest React features",
};

export default Header;
