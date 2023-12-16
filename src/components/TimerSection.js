import React, { useState, useEffect } from 'react';
import './TimerSection.css'; // Import the CSS file

const TimerSection = ({ tasks, setTasks }) => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset task details after closing modal
    setTaskTitle('');
    setTaskDescription('');
  };

  const saveTask = () => {
    // Logic to save the task
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      time: timer,
    };

    // Simulating saving the task to the data store
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Reset the timer to 0 after saving
    setTimer(0);

    // Close the modal after saving
    closeModal();
  };

  return (
    <div className="timer-section">
      <div className="digital-clock">{new Date(timer * 1000).toISOString().substr(11, 8)}</div>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={openModal} disabled={!isRunning}>
        Save
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <label>Title:</label>
            <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            <label>Description:</label>
            <input type="text" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            <button onClick={saveTask}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerSection;