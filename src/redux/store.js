import { configureStore } from '@reduxjs/toolkit';
import {
	reducerPath as rpHeroes,
	reducer as rHeroes,
	middleware as mHeroes,
} from '../api/heroesApi';
import {
	reducerPath as rpFilters,
	reducer as rFilters,
	middleware as mFilters,
} from '../api/filtersApi';
import filters from './filters';

const stringMiddleware = () => next => action => {
	if (typeof action === 'string') return next({ type: action });
	return next(action);
};

const store = configureStore({
	reducer: { filters, [rpHeroes]: rHeroes, [rpFilters]: rFilters },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(stringMiddleware, mHeroes, mFilters),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
