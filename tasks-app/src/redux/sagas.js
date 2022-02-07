import { all, call, put, takeLatest } from 'redux-saga/effects';

import { loadDataSuccess } from './actions';
import { fetchPosts } from './../api/index';
import { TasksActionTypes } from './types';

export function* loadDataAsync() {
  try {
    const res = yield fetchPosts();
    const mapToTasks = yield res
      .filter((_,idx) => idx < 3)
      .map(task => {
        return {
          id: task.id,
          name: task.title
        }
      });
    yield put(loadDataSuccess(mapToTasks));
  } catch(err) {
    console.log(err);
  }
}

export function* loadData() {
  yield takeLatest(
    TasksActionTypes.LOAD_DUMMY_DATA_START, 
    loadDataAsync
  );
}

export function* sagas() {
  yield all([
    yield call(loadData)
  ]);
}