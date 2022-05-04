import { createAction } from '@reduxjs/toolkit';

export const filtersFetching = createAction('FILTERS_FETCHING');
export const filtersFetched = createAction('FILTERS_FETCHED');
export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');
export const setActiveFilter = createAction('SET_ACTIVE_FILTER');
