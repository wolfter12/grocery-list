import { ADD_ENTRY, CHANGE_STATUS, DELETE_ENTRY } from '../actions/types';

const initialState = [];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, action.payload];
    case DELETE_ENTRY:
      return state.filter(({ id }) => id !== action.payload.id);
    case CHANGE_STATUS:
      return state.map((obj) => {
        if (obj.id === action.payload.id) {
          return {
            ...obj,
            statusHistory: [action.payload.statusItem, ...obj.statusHistory],
          };
        }
        return obj;
      });
    default:
      return state;
  }
};

export default listReducer;
