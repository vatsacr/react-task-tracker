import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, description }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button bgColor="#e87500" text="Add" color="#ffffff" />
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
