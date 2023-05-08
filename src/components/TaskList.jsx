import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleDelete, handleCheckboxChange }) => {
  return (
    <ul className="list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          handleDelete={handleDelete}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
    </ul>
  );
};

export default TaskList;
