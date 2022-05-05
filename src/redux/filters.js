import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filters: [],
	filtersLoadingStatus: 'idle',
	activeFilter: 'all',
};

const { reducer, actions } = createSlice({
	initialState,
	name: 'filters',
	reducers: {
		filtersFetching: state => {
			state.filtersLoadingStatus = 'loading';
		},
		filtersFetched: (state, action) => {
			state.filtersLoadingStatus = 'idle';
			state.filters = action.payload;
		},
		filtersFetchingError: state => {
			state.filtersLoadingStatus = 'error';
		},
		setActiveFilter: (state, action) => {
			state.activeFilter = action.payload;
		},
	},
});

export default reducer;
export const {
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
	setActiveFilter,
} = actions;
