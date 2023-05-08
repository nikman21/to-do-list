import React, { useState } from 'react';
import './style.css';
import TaskForm from './components/taskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (newTask) => {
    setTasks([...tasks, { title: newTask, completed: false }]);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (index) => {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  }

  return (
    <div className="container">
      <h1 className="title">To-do List</h1>
      <TaskForm handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} handleDelete={handleDelete} handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default App;



