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
    <div>
      <h3>All Tasks</h3>
      <div>
        {allTasks.map((task) => (
          <div key={task.id}>
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                />
                <button onClick={() => SubmitEditedTodo(task.id)}>
                  Submit
                </button>
              </>
            ) : (
              <>
                <li
                  style={{
                    textDecoration: task.isComplete ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </li>

                <button onClick={() => CompleteTodo(task.id)}>Done</button>
                <button onClick={() => UpdateTodo(task.id, task.text)}>
                  Edit
                </button>
                <button onClick={() => DeleteTodo(task.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoList;
