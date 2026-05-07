import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const getTasks = async () => {
    const response = await axios.get(`${API_URL}/api/tasks`);
    setTasks(response.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;

    await axios.post(`${API_URL}/api/tasks`, { title });
    setTitle("");
    getTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/api/tasks/${id}`);
    getTasks();
  };

  const startEdit = (task) => {
    setEditId(task.id);
    setTitle(task.title);
  };

  const updateTask = async () => {
    if (!title.trim()) return;

    await axios.put(`${API_URL}/api/tasks/${editId}`, { title });
    setTitle("");
    setEditId(null);
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <h1>To-Do List App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {editId ? (
          <button onClick={updateTask}>Update</button>
        ) : (
          <button onClick={addTask}>Add</button>
        )}
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <div>
              <button onClick={() => startEdit(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;