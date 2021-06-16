import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, description, onAdd, toggleAddTask }) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button
        bgColor={toggleAddTask ? "#ff5030" : "#e87500"}
        text={toggleAddTask ? "Close" : "Add"}
        color="#ffffff"
        onAdd={onAdd}
      />
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
