import { configureStore, combineReducers } from '@reduxjs/toolkit';
import heroesReducer from './heroes/heroesReducer';
import filtersReducer from './filters/filtersReducer';
import thunk from 'redux-thunk';

// const enhancer =
// 	configureStore =>
// 	(...args) => {
// 		const store = configureStore(...args);

// 		const oldDispatch = store.dispatch;
// 		store.dispatch = action => {
// 			if (typeof action === 'string') return oldDispatch({ type: action });
// 			return oldDispatch(action);
// 		};

// 		return store;
// 	};

const middleware = () => next => action => {
	if (typeof action === 'string') return next({ type: action });
	return next(action);
};

const store = configureStore({
	reducer: combineReducers({ heroesReducer, filtersReducer }),
	// enhancers: [enhancer],
	middleware: [thunk, middleware],
});

export default store;
