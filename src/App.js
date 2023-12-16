import React, { useState } from 'react';
import TimerSection from './components/TimerSection';
import TaskSection from './components/TasksSection';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>Time Tracking App</h1>
      <TimerSection tasks={tasks} setTasks={setTasks} />
      <TaskSection tasks={tasks} />
    </div>
  );
};

export default App;