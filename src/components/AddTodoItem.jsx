function AddTodoItem({ addTask, setAddTask, AddTodo }) {
  return (
    <div className="w-1/4 flex justify-between gap-4">
      <input
        type="text"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
        placeholder="ex: create budget"
        className="rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-full"
      />
      <button
        onClick={AddTodo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}
export default AddTodoItem;
