import * as types from '../constants/actionTypes';

const initialState = [];

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case types.RETRIEVE_INIT_DATA:
      return action.data;

    case types.FETCH_SUCCESSED:
      return action.data;

    case types.UPDATE_SUCCESSED:
      return action.data.todos;

    case types.REMOVE_SUCCESSED:
      return action.data.todos;

    case types.EDIT_SUCCESSED:
      return action.data.todos;

    default:
      return state;
  }
}
