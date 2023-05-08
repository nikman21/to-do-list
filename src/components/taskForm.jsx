import React, { useState } from 'react';

const TaskForm = ({ handleSubmit }) => {
  const [newTask, setNewTask] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(newTask);
    setNewTask('');
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        className="input"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
};

export default TaskForm;
