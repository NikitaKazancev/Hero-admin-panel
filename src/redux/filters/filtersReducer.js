import { createReducer } from '@reduxjs/toolkit';
import {
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
	setActiveFilter,
} from './actions';

const initialState = {
	filters: [],
	filtersLoadingStatus: 'idle',
	activeFilter: 'all',
};

const filtersReducer = createReducer(
	initialState,
	{
		[filtersFetching]: state => {
			state.filtersLoadingStatus = 'loading';
		},
		[filtersFetched]: (state, action) => {
			state.filtersLoadingStatus = 'idle';
			state.filters = action.payload;
		},
		[filtersFetchingError]: state => {
			state.filtersLoadingStatus = 'error';
		},
		[setActiveFilter]: (state, action) => {
			state.activeFilter = action.payload;
		},
	},
	[],
	state => state
);

export default filtersReducer;
