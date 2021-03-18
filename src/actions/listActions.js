import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { ADD_ENTRY, DELETE_ENTRY } from './types';

export const addEntry = (name, status, priority) => (dispatch) => {
  const timeStamp = moment().format('DD/MM/YYYY HH:mm:ss');
  dispatch({
    type: ADD_ENTRY,
    payload: {
      id: uuidv4(),
      name,
      statusHistory: [{ status, timeStamp }],
      priority,
    },
  });
};

export const deleteEntry = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ENTRY,
    payload: { id },
  });
};
