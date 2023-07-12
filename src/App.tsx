import React, { useReducer, useState, CSSProperties } from "react";
import { Task } from "./Task";

type Todo = {
  id: number;
  task: string;
};

type Action = {
  type: "ADD" | "UPDATE" | "REMOVE";
  payload: any;
};

const initialState: Todo[] = [
  {
    id: 1,
    task: "Learn React",
  },
];

const reducer = (state: Todo[], { type, payload }: Action) => {
  switch (type) {
    case "ADD":
      return [...state, payload];
    case "UPDATE":
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, ...payload };
        }
        return todo;
      });
    case "REMOVE":
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTask, setNewTask] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: state.length + 1,
      task: newTask,
    };
    dispatch({ type: "ADD", payload: newTodo });
    setNewTask("");
  };

  const handleUpdate = (todo: Todo) => {
    dispatch({ type: "UPDATE", payload: todo });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Things To Do 🤔</h1>
      <form onSubmit={handleOnSubmit} style={styles.form}>
        <input type="text" placeholder="Add new task..." value={newTask} onChange={handleOnChange} style={styles.input} />
        <button type="submit" style={styles.button}>
          Add Task
        </button>
      </form>
      <ul style={styles.list}>
        {state.map((todo) => (
          <Task key={todo.id.toString()} id={todo.id} task={todo.task} handleDelete={handleDelete} handleUpdate={handleUpdate} />
        ))}
      </ul>
    </div>
  );
}

export default App;

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    height: "100vh",
  },
  list: {
    minHeight: "500px",
    maxHeight: "500px",
    overflow: "auto",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  form: {
    marginTop: "20px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#42b983",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
