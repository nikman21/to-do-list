import React from 'react';

const Task = ({ task, index, handleDelete, handleCheckboxChange }) => {
  return (
    <li className={task.completed ? 'list-item completed' : 'list-item'}>
      <label>
        <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} />
        <span>{task.title}</span>
      </label>
      <button className="delete-button" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </li>
  );
};

export default Task;
