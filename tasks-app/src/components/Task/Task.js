import React from 'react';
import { useDispatch } from 'react-redux';

import { removeTask } from './../../redux/actions';

import './Task.scss';

const Task = ({ task: { name, id } }) => {
  const dispatch = useDispatch();
  return (
    <div className='task'>
      <p>{name}</p>
      <button
        type='button'
        onClick={() => dispatch(removeTask(id))}>
          Remove
      </button>
    </div>
  );
}

export default Task;