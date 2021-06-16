const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h1 key={task.id}>{task.name}</h1>
      ))}
    </>
  );
};

export default Tasks;
