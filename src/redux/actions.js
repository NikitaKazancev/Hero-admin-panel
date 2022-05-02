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

export { heroesFetching, heroesFetched, heroesFetchingError };
