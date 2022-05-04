import {
	HEROES_FETCHING,
	HEROES_FETCHED,
	HEROES_FETCHING_ERROR,
	DELETE_HERO,
	CREATE_HERO,
} from './actionsTypes';

export const heroesFetching = () => ({
	type: HEROES_FETCHING,
});

export const heroesFetched = heroes => ({
	type: HEROES_FETCHED,
	payload: heroes,
});

export const heroesFetchingError = () => ({
	type: HEROES_FETCHING_ERROR,
});

export const deleteHero = id => ({
	type: DELETE_HERO,
	payload: id,
});

export const createHero = hero => ({
	type: CREATE_HERO,
	payload: hero,
});
