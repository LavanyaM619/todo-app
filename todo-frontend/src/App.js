import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const API_URL = 'http://localhost:4000';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error('Failed to fetch tasks', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title, description) => {
    try {
      await axios.post(`${API_URL}/tasks`, { title, description });
      fetchTasks();
    } catch (err) {
      console.error('Failed to add task', err);
    }
  };

  const markDone = async (id) => {
    try {
      await axios.patch(`${API_URL}/tasks/${id}/done`);
      fetchTasks();
    } catch (err) {
      console.error('Failed to mark done', err);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>📝 My Todo List</h1>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onMarkDone={markDone} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    padding: '40px 16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    width: '100%',
    maxWidth: '600px',
    background: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center',
  }
};

export default App;
