import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert('Title is required');
    onAdd(title, description);
    setTitle('');
    setDescription('');
  };

  const styles = {
    form: {
      marginBottom: 30,
      padding: 30,
      borderRadius: 16,
      background: 'linear-gradient(135deg, #667eea, #764ba2)', // smooth purple-blue gradient
      boxShadow: '0 10px 30px rgba(118, 75, 162, 0.4)',
      maxWidth: 600,
      margin: '40px auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#fff',
      userSelect: 'none',
    },
    input: {
      width: '100%',
      padding: '14px 2px',
      marginBottom: 20,
      borderRadius: 12,
      border: 'none',
      fontSize: 18,
      boxShadow: 'inset 0 3px 8px rgba(255, 255, 255, 0.15)',
      transition: 'box-shadow 0.25s ease, background-color 0.25s ease',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#fff',
      outline: 'none',
    },
    inputFocus: {
      boxShadow: '0 0 8px 3px rgba(255, 255, 255, 0.6)',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    textarea: {
      width: '100%',
      padding: '14px 2px',
      marginBottom: 25,
      borderRadius: 12,
      border: 'none',
      fontSize: 18,
      boxShadow: 'inset 0 3px 8px rgba(255, 255, 255, 0.15)',
      resize: 'vertical',
      minHeight: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#fff',
      transition: 'box-shadow 0.25s ease, background-color 0.25s ease',
      outline: 'none',
      fontFamily: 'inherit',
    },
    textareaFocus: {
      boxShadow: '0 0 8px 3px rgba(255, 255, 255, 0.6)',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    button: {
      width: '100%',
      padding: '16px 0',
      fontSize: 20,
      fontWeight: '700',
      borderRadius: 14,
      border: 'none',
      cursor: 'pointer',
      background: 'linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%)',
      color: '#fff',
      boxShadow: '0 6px 20px rgba(255, 126, 179, 0.6)',
      transition: 'background 0.3s ease, transform 0.2s ease',
      userSelect: 'none',
    },
    buttonHover: {
      background: 'linear-gradient(90deg, #ff7eb3 0%, #ff758c 100%)',
      transform: 'scale(1.07)',
    },
    label: {
      fontWeight: '600',
      fontSize: 16,
      marginBottom: 6,
      display: 'block',
      color: '#f0e9ff',
    },
  };

  // States for focus styling
  const [titleFocus, setTitleFocus] = useState(false);
  const [descFocus, setDescFocus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <form onSubmit={handleSubmit} style={styles.form} noValidate>
      <label htmlFor="title" style={styles.label}>
        Task Title
      </label>
      <input
        id="title"
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onFocus={() => setTitleFocus(true)}
        onBlur={() => setTitleFocus(false)}
        style={titleFocus ? { ...styles.input, ...styles.inputFocus } : styles.input}
      />
      <label htmlFor="description" style={styles.label}>
        Description (Optional)
      </label>
      <textarea
        id="description"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onFocus={() => setDescFocus(true)}
        onBlur={() => setDescFocus(false)}
        style={descFocus ? { ...styles.textarea, ...styles.textareaFocus } : styles.textarea}
      />
      <button
        type="submit"
        style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Add Task"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
