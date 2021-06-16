import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Clean room",
      day: "February 6th at 5:30 PM",
      reminder: "true",
    },
    {
      id: 2,
      name: "Remove trash",
      day: "February 7th at 7:30 AM",
      reminder: "true",
    },
    {
      id: 3,
      name: "Cook lunch",
      day: "February 8th at 11:30 AM",
      reminder: "true",
    },
  ]);
  return (
    <div>
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
