import { createStore } from 'redux';
import dressFeatureReducer from './reducer';

const store = createStore(dressFeatureReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;