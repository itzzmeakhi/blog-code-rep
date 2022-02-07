import { 
  addTask,
  removeTask,
  loadDataStart,
  loadDataSuccess 
} from './../../redux/actions';
import { TasksActionTypes } from './../../redux/types';

test('add task should returns correct values', () => {
  const actionReturnValue = addTask('listen to podcast');
  expect(actionReturnValue.type).toBe(TasksActionTypes.ADD_TASK);
  expect(actionReturnValue.payload.name).toBe('listen to podcast');
});

test('remove task should return correct values', () => {
  const actionReturnValue = removeTask('12345');
  expect(actionReturnValue.type).toBe(TasksActionTypes.REMOVE_TASK);
  expect(actionReturnValue.payload).toBe('12345');
});

test('load data start return correct value', () => {
  const actionReturnValue = loadDataStart();
  expect(actionReturnValue.type).toBe(TasksActionTypes.LOAD_DUMMY_DATA_START);
});

test('load data success returns correct values', () => {
  const sampleData = [
    { name: 'task1', id: '1' },
    { name: 'task2', id: '2' }
  ];
  const actionReturnValue = loadDataSuccess(sampleData);
  expect(actionReturnValue.type).toBe(TasksActionTypes.LOAD_DUMMY_DATA_SUCCESS);
  expect(actionReturnValue.payload).toEqual(sampleData);
});