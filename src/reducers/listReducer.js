import { ADD_ENTRY, DELETE_ENTRY } from '../actions/types';

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, action.payload];
    case DELETE_ENTRY:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default listReducer;
