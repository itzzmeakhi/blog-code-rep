import { TasksActionTypes } from './types';

export const addTask = (task) => {
  return {
    type: TasksActionTypes.ADD_TASK,
    payload: {
      name: task,
      id: new Date().getTime()
    }
  }
}

export const removeTask = (taskId) => {
  return {
    type: TasksActionTypes.REMOVE_TASK,
    payload: taskId
  }
}

export const loadDataStart = () => {
  return {
    type: TasksActionTypes.LOAD_DUMMY_DATA_START
  }
}

export const loadDataSuccess = (tasks) => {
  return {
    type: TasksActionTypes.LOAD_DUMMY_DATA_SUCCESS,
    payload: tasks
  }
}