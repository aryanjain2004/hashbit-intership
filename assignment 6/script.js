function TodoApp() {
  const [task, setTask] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (trimmed === '') return;

    const updatedTodos = [...todos, trimmed].sort();
    setTodos(updatedTodos);
    setTask('');
  };

  const deleteTask = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);