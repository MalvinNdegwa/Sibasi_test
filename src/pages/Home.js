import React, { useState } from "react";
import "./Home.css"; // Import the CSS file

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "House cleaning",
      date: "12/06/2022",
      duration: "2 hours",
    },
    {
      id: "2",
      name: "Coding",
      date: "12/06/2022",
      duration: "3 hours",
    },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  const handleUpdate = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
    setEditingTask(null);
  };

  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="container">
      <h2>Add Task</h2>
      <AddTask addTask={addTask} />
      <h2>Task List</h2>
      <table>
        <tbody>
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              {editingTask === task.id ? (
                <EditTask task={task} handleUpdate={handleUpdate} />
              ) : (
                <TaskRow
                  task={task}
                  deleteTask={deleteTask}
                  setEditingTask={setEditingTask}
                />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TaskRow({ task, deleteTask, setEditingTask }) {
  const handleEdit = () => {
    setEditingTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.date}</td>
      <td>{task.duration}</td>
      <td>
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

function EditTask({ task, handleUpdate }) {
  const [name, setName] = useState(task.name);
  const [date, setDate] = useState(task.date);
  const [duration, setDuration] = useState(task.duration);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTask = {
      ...task,
      name,
      date,
      duration,
    };

    handleUpdate(task.id, updatedTask);
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="edit-input"
        />
      </td>
      <td>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="edit-input"
        />
      </td>
      <td>
        <input
          type="text"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          className="edit-input"
        />
      </td>
      <td>
        <button className="update-button" onClick={handleSubmit}>
          Update
        </button>
      </td>
    </tr>
  );
}

function AddTask({ addTask }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now().toString(),
      name,
      date,
      duration,
    };

    addTask(newTask);

    setName("");
    setDate("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter task name"
        required
        className="add-input"
      />
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        placeholder="Enter task date"
        required
        className="add-input"
      />
      <input
        type="text"
        value={duration}
        onChange={(event) => setDuration(event.target.value)}
        placeholder="Enter task duration"
        required
        className="add-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}
