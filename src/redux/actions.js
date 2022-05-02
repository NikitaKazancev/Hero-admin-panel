const heroesFetching = () => ({
	type: 'HEROES_FETCHING',
});

const heroesFetched = heroes => ({
	type: 'HEROES_FETCHED',
	payload: heroes,
});

const heroesFetchingError = () => ({
	type: 'HEROES_FETCHING_ERROR',
});

const deleteHero = id => ({
	type: 'DELETE_HERO',
	payload: id,
});

const createHero = hero => ({
	type: 'CREATE_HERO',
	payload: hero,
});

const filtersFetching = () => ({
	type: 'FILTERS_FETCHING',
});

const filtersFetched = filters => ({
	type: 'FILTERS_FETCHED',
	payload: filters,
});

const filtersFetchingError = () => ({
	type: 'FILTERS_FETCHING_ERROR',
});

export {
	heroesFetching,
	heroesFetched,
	heroesFetchingError,
	deleteHero,
	createHero,
	filtersFetching,
	filtersFetched,
	filtersFetchingError,
};
