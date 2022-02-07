import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask, loadDataStart } from './../../redux/actions';

import './AddTask.scss';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <div className='inputRow'>
        <label htmlFor='addTask'>
          Task &nbsp;
          <input
            type='text'
            id='addTask'
            value={task}
            onChange={(ev) => setTask(ev.target.value)} />
        </label>
        <button
          type='button'
          onClick={() => dispatch(addTask(task))}>
            Add Task
        </button>
      </div>
      <button
        type='button'
        onClick={() => dispatch(loadDataStart())}>
          Load dummy data
      </button>
    </div>
  );
}

export default AddTask;