import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const items = createReducer([], {
  [actions.contactAdd]: (state, { payload }) => [...state, payload],
  [actions.contactDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});