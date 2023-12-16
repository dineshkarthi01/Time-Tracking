import React from 'react';

const TaskSection = ({ tasks }) => {
  return (
    <div>
      <h2>Saved Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks saved yet.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong> - Time Tracked: {formatTime(task.time)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Helper function to format time in HH:mm:ss
const formatTime = (seconds) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};

export default TaskSection;