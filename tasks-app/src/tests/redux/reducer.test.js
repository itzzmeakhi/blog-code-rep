import reducer from "../../redux/reducer";

import { TasksActionTypes } from './../../redux/types';

const initialState = {
  tasks: []
};

const task = {
  name: 'Task 1',
  id: new Date().getTime()
};

test('reducer returns the initial state correctly', () => {
  const reducerState = reducer(undefined, {});
  expect(reducerState).toEqual(initialState);
});

test('handles ADD_TASK as expected', () => {
  const action = {
    type: TasksActionTypes.ADD_TASK,
    payload: task
  };
  const reducerState = reducer(initialState, action);
  expect(reducerState.tasks).toEqual([task]);
});

test('handles REMOVES_TASK as expected', () => {
  const action = {
    type: TasksActionTypes.REMOVE_TASK,
    payload: task.id
  };
  const reducerState = reducer(initialState, action);
  expect(reducerState.tasks).toEqual([]);
});

test('handles LOAD DUMMY DATA SUCCESS as expected', () => {
  const tasks = [
    { name: 'task1', id: '1234' },
    { name: 'task2', id: '12345' }
  ]
  const action = {
    type: TasksActionTypes.LOAD_DUMMY_DATA_SUCCESS,
    payload: [...tasks]
  }
  const reducerState = reducer(initialState, action);
  expect(reducerState.tasks).toEqual(tasks);
});


