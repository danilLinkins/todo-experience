import shortid from 'shortid';
import * as types from '../constants/actionTypes';

export function getInitialData(data) {
  return {
    type: types.RETRIEVE_INIT_DATA,
    data,
  };
}

const fetchSuccessed = (data) => ({ type: types.FETCH_SUCCESSED, data });
const fetchFailed = () => ({ type: types.FETCH_FAILED });

const updateSuccessed = (data) => ({ type: types.UPDATE_SUCCESSED, data });
const updateFailed = () => ({ type: types.UPDATE_FAILED });

const removeSuccessed = (data) => ({ type: types.REMOVE_SUCCESSED, data });
const removeFailed = () => ({ type: types.REMOVE_FAILED });

const editSuccessed = (data) => ({ type: types.REMOVE_SUCCESSED, data });
const editFailed = () => ({ type: types.REMOVE_FAILED });

export function retrieve() {
  return {
    types: [fetchSuccessed, fetchFailed],
    fetchAPI: {
      path: '/api/todos/',
      method: 'GET',
    },
  };
}

export function update(title) {
  return {
    types: [updateSuccessed, updateFailed],
    fetchAPI: {
      path: '/api/todos/',
      method: 'PUT',
      body: {
        id: shortid.generate(),
        title,
      },
    },
  };
}

export function remove(id) {
  return {
    types: [removeSuccessed, removeFailed],
    fetchAPI: {
      path: '/api/todos/',
      method: 'DELETE',
      body: {
        id,
      },
    },
  };
}

export function edit(id, title) {
  return {
    types: [editSuccessed, editFailed],
    fetchAPI: {
      path: '/api/todos/',
      method: 'PUT',
      body: {
        id,
        title,
      },
    },
  };
}
