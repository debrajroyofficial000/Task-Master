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
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  return (
    <div className="h-screen w-full flex justify-start items-center flex-col bg-gray-500 p-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Todo App
      </h1>
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
    </div>
  );
}

export default App;
