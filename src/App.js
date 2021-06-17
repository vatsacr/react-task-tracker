import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [toggleAddTask, setToggleAddTask] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const responseFromServer = await fetchData();
      setTasks(responseFromServer);
    };
    getData();
  }, []);

  const addTask = async (task) => {
    const response = await fetch("http://localhost:5200/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:5200/tasks");
    const data = await response.json();
    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5200/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const openAddTask = () => {
    setToggleAddTask(!toggleAddTask);
  };
  return (
    <div>
      <Header
        toggleAddTask={toggleAddTask}
        title="Task Tracker"
        onAdd={openAddTask}
      />
      {toggleAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
