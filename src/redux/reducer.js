const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
	filters: [],
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
		default:
			return state;
	}
};

export default reducer;
