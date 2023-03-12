import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleDone, deleteTask, editTask } from "./store/todo.js";
import { useState } from "react";
// we import our reducers and state-handlers

// our main app component
export default function App() {
  // we call upon our object array with useSelector of the state and obtaining our state.todos
  // we name our dispatch handler and our user input handling with useState
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [inputTodo, setTodo] = useState("");
  // we map each todo instance from our todos, and build an HTML block for each instance
  const todo = todos.map((task, index) => {
    return (
      // each list item needs have key
      // to determine the styling of the element, we use an event
      <li className="todoLi" key={index}>
        <div className={handleClass(task.completed)}>{task.content}</div>
        <span className="todoSpan"></span>
        <button
          className="complete-btn"
          id={task.id}
          onClick={(e) => handleClick(e)}
        >
          {handleButtonText(task.completed)}
        </button>
        <button
          className="edit-btn"
          id={task.id}
          onClick={(e) => handleClick(e)}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          id={task.id}
          onClick={(e) => handleClick(e)}
        >
          Delete
        </button>
      </li>
    );
  });

  // determines the text of the complete button by checking the related todo's complete boolean
  function handleButtonText(textToggle) {
    if (textToggle === true) {
      return "Undo";
    } else {
      return "Complete";
    }
  }

  // determines the styling of the complete button by checking the related todo's complete boolean
  function handleClass(styleToggle) {
    console.log("Style function triggered");
    if (styleToggle === true) {
      return "todoComplete";
    } else {
      return "todo";
    }
  }

  // function handles the clicking of the three buttons
  // which check their corresponding todo's id. Each button is assigned the same ide
  // for easy referencing
  function handleClick(e) {
    e.preventDefault();

    // we check which button is pressed based on its class
    // and call the appropriate dispatch
    if (e.target.className === "complete-btn") {
      dispatch(toggleDone(e.target.id));
    } else if (e.target.className === "delete-btn") {
      console.log(
        `From the handleClick function, we have the index as ${e.target.id}`
      );
      dispatch(deleteTask(e.target.id));
    } else {
      dispatch(editTask(e.target.id));
    }
  }

  // our handleSubmit for our addTask button
  function handleSubmit(e) {
    e.preventDefault();
    if (inputTodo === "") {
      alert("No task added, please enter a todo.");
    } else {
      dispatch(addTask(inputTodo));
      setTodo("");
    }
    console.log(todo);
  }

  // our return
  return (
    <div className="App">
      <h1>Your Todo List</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="Enter a Todo"
          id="inputTodo"
          value={inputTodo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" id="addButton">
          Add
        </button>
      </form>
      <ul className="todoUl">{todo}</ul>
    </div>
  );
}
