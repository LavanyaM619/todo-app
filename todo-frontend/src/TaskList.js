import React from 'react';

function TaskList({ tasks, onMarkDone }) {
  if (tasks.length === 0)
    return (
      <p
        style={{
          textAlign: 'center',
          color: '#999',
          fontSize: 18,
          marginTop: 40,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        No tasks to show.
      </p>
    );

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
            borderRadius: 16,
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
            padding: 20,
            marginBottom: 18,
            transition: 'transform 0.2s ease',
            cursor: 'default',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <h3
            style={{
              margin: '0 0 8px 0',
              fontSize: 20,
              color: '#333',
              fontWeight: '700',
            }}
          >
            {task.title}
          </h3>
          {task.description && (
            <p
              style={{
                margin: '0 0 15px 0',
                fontSize: 15,
                color: '#555',
                lineHeight: 1.4,
              }}
            >
              {task.description}
            </p>
          )}
          <button
            onClick={() => onMarkDone(task.id)}
            style={{
              background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
              border: 'none',
              borderRadius: 12,
              padding: '10px 28px',
              color: '#fff',
              fontSize: 15,
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(24, 90, 157, 0.6)',
              transition: 'background 0.3s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #185a9d 0%, #43cea2 100%)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            aria-label={`Mark ${task.title} as done`}
          >
            Mark Done
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
