import {
	FILTERS_FETCHED,
	FILTERS_FETCHING,
	FILTERS_FETCHING_ERROR,
	SET_ACTIVE_FILTER,
} from './actionsTypes';

const initialState = {
	filters: [],
	filtersLoadingStatus: 'idle',
	activeFilter: 'all',
};

const filtersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FILTERS_FETCHING:
			return {
				...state,
				filtersLoadingStatus: 'loading',
			};
		case FILTERS_FETCHED:
			return {
				...state,
				filters: payload,
				filtersLoadingStatus: 'idle',
			};
		case FILTERS_FETCHING_ERROR:
			return {
				...state,
				filtersLoadingStatus: 'error',
			};
		case SET_ACTIVE_FILTER:
			return {
				...state,
				activeFilter: payload,
			};
		default:
			return state;
	}
};

export default filtersReducer;
