import { useState } from "react";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [addTask, setAddTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [editTaskText, setEditTaskText] = useState("");
  const [editTaskId, setEditTaskId] = useState("");

  function AddTodo() {
    if (addTask) {
      setAllTasks([
        ...allTasks,
        { id: uuidv4(), text: addTask, isComplete: false },
      ]);
      setAddTask("");
    } else {
      alert("Need to add task ");
    }
  }

  function DeleteTodo(id) {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  }

  function UpdateTodo(id, text) {
    setEditTaskText(text);
    setEditTaskId(id);
  }

  function SubmitEditedTodo(id) {
    if (editTaskText) {
      setAllTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, text: editTaskText } : task
        )
      );
      setEditTaskId("");
      setEditTaskText("");
    } else alert("need to put updated value");
  }

  function CompleteTodo(id) {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: editTaskText } : task
      )
    );
  }

  return (
    <>
      <h1>Todo App</h1>
      <AddTodoItem
        addTask={addTask}
        setAddTask={setAddTask}
        AddTodo={AddTodo}
      />
      <TodoList
        allTasks={allTasks}
        editTaskText={editTaskText}
        editTaskId={editTaskId}
        setEditTaskText={setEditTaskText}
        DeleteTodo={DeleteTodo}
        UpdateTodo={UpdateTodo}
        SubmitEditedTodo={SubmitEditedTodo}
        CompleteTodo={CompleteTodo}
      />
    </>
  );
}

export default App;
