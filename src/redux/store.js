import { configureStore, combineReducers } from '@reduxjs/toolkit';
import heroesReducer from './reducers/heroesReducer';
import filtersReducer from './reducers/filtersReducer';

const store = configureStore({
	reducer: combineReducers({ heroesReducer, filtersReducer }),
});

export default store;
