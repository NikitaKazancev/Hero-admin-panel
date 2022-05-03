import { sortHeroes } from '../services/functions';

const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
	filters: [],
	filtersLoadingStatus: 'idle',
	activeFilter: 'all',
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'HEROES_FETCHING':
			return {
				...state,
				heroesLoadingStatus: 'loading',
			};
		case 'HEROES_FETCHED':
			return {
				...state,
				heroes: payload,
				heroesLoadingStatus: 'idle',
			};
		case 'HEROES_FETCHING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error',
			};
		case 'DELETE_HERO':
			return {
				...state,
				heroes: state.heroes.filter(({ id }) => id !== payload),
			};
		case 'CREATE_HERO':
			return {
				...state,
				heroes: sortHeroes([...state.heroes, payload]),
			};
		case 'FILTERS_FETCHING':
			return {
				...state,
				filtersLoadingStatus: 'loading',
			};
		case 'FILTERS_FETCHED':
			return {
				...state,
				filters: payload,
				filtersLoadingStatus: 'idle',
			};
		case 'FILTERS_FETCHING_ERROR':
			return {
				...state,
				filtersLoadingStatus: 'error',
			};
		case 'SET_ACTIVE_FILTER':
			return {
				...state,
				activeFilter: payload,
			};
		default:
			return state;
	}
};

export default reducer;
