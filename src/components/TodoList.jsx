function TodoList({
  allTasks,
  editTaskText,
  editTaskId,
  setEditTaskText,
  DeleteTodo,
  UpdateTodo,
  SubmitEditedTodo,
  CompleteTodo,
}) {
  return (
    <div className="my-2  w-1/3">
      <h2 className="text-3xl font-extrabold dark:text-white ">All Tasks</h2>
      <div className="w-full border-t border-black my-4">
        {allTasks.map((task) => (
          <div key={task.id} className="flex justify-between items-center my-4">
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                  className="rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline w-full"
                />
                <button
                  onClick={() => SubmitEditedTodo(task.id)}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-1"
                >
                  Submit
                </button>
              </>
            ) : (
              <>
                <li
                  style={{
                    textDecoration: task.isComplete ? "line-through" : "none",
                  }}
                  className="list-none py-2 px-4 text-xl rounded bg-white w-3/5"
                >
                  {task.text}
                </li>

                <div>
                  <button
                    onClick={() => CompleteTodo(task.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => UpdateTodo(task.id, task.text)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => DeleteTodo(task.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-1"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoList;
