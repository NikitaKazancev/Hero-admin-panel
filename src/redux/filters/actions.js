import {
	FILTERS_FETCHED,
	FILTERS_FETCHING,
	FILTERS_FETCHING_ERROR,
	SET_ACTIVE_FILTER,
} from './actionsTypes';

export const filtersFetching = () => ({
	type: FILTERS_FETCHING,
});

export const filtersFetched = filters => ({
	type: FILTERS_FETCHED,
	payload: filters,
});

export const filtersFetchingError = () => ({
	type: FILTERS_FETCHING_ERROR,
});

export const setActiveFilter = name => ({
	type: SET_ACTIVE_FILTER,
	payload: name,
});
