function AddTodoItem({ addTask, setAddTask, AddTodo }) {
  return (
    <div>
      <input
        type="text"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />
      <button onClick={AddTodo}>Add</button>
    </div>
  );
}
export default AddTodoItem;
