import React, { FC, useState } from "react";

interface Props {
  id: number;
  task: string;
  handleDelete: any;
  handleUpdate: any;
}

export const Task: FC<Props> = ({ id, task, handleDelete, handleUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleEdit = () => {
    if (editMode) {
      handleUpdate({
        id,
        task: editTask,
      });
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask(event.target.value);
  };

  return (
    <li style={styles.container}>
      {editMode ? <input type="text" value={editTask} onChange={handleChange} style={styles.input} /> : <span style={styles.taskText}>{task}</span>}
      <button onClick={handleEdit} style={styles.button}>
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>
      <button onClick={() => handleDelete(id)} style={styles.button}>
        <span role="img" aria-label="delete">
          ❌
        </span>
      </button>
    </li>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "8px",
    justifyContent: "center",
  },
  input: {
    marginRight: "8px",
    padding: "4px",
    border: "none",
    width: "100%",
    borderBottom: "1px solid #ccc",
    outline: "none",
  },
  taskText: {
    marginRight: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "4px",
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#888",
  },
};
