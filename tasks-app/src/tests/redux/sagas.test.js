import { runSaga } from "redux-saga";

import { loadDataAsync } from './../../redux/sagas';
import { loadDataSuccess } from './../../redux/actions';
import * as api from './../../api/index';

test('should load the tasks data', async () => {
  const dispatchedActions = [];
  const mockedRes = [
    { title: 'Task 1', id: '1' },
    { title: 'Task 2', id: '2' }
  ];

  const expectedRes = mockedRes.map(el =>{
    return {
      id: el.id,
      name: el.title
    }
  });
  api.fetchPosts = jest.fn(
    () => Promise.resolve(mockedRes)
  );
  const fakeStore = {
    dispatch: action => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, loadDataAsync).done;

  expect(dispatchedActions[0]).toEqual(loadDataSuccess(expectedRes));
  expect(api.fetchPosts.mock.calls.length).toBe(1);
});