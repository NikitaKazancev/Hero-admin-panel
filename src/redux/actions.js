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

export { heroesFetching, heroesFetched, heroesFetchingError, deleteHero };
