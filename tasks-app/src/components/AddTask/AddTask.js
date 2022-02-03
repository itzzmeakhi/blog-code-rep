import React, { useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState('');
  return (
    <div>
      <label htmlFor='addTask'>
        Task
        <input
          type="text"
          id="addTask"
          value={task}
          onChange={(ev) => setTask(ev.target.value)} />
      </label>
      <button>Add Task</button>
    </div>
  );
}

export default AddTask;