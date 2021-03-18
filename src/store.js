import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadData, saveData } from './localStorage';

const persistedData = loadData();

const initialState = {
  list: persistedData,
};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => {
  const data = store.getState().list || [];
  saveData([...data]);
});

export default store;
