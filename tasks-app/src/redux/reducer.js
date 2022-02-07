import { TasksActionTypes } from './types';

const INITIAL_STATE = {
  tasks: []
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch(type) {
    case TasksActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { ...payload }]
      }
    case TasksActionTypes.REMOVE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload)
      }
    }
    case TasksActionTypes.LOAD_DUMMY_DATA_SUCCESS: {
      return {
        ...state,
        tasks: [...payload]
      }
    }
    default:
      return state;
  }
}

export default reducer;