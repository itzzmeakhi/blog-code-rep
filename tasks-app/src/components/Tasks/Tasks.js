import React from 'react';
import { useSelector } from 'react-redux';

import Task from '../Task/Task';

import './Tasks.scss';

const Tasks = () => {
  const tasks = useSelector(state => state.tasks);
  return (
    <div className='tasks'>
      {tasks.length === 0 && <p> No tasks available </p>}
      {tasks.map(task => <Task task={task} key={task.id} />)}
    </div>
  );
}

export default Tasks;