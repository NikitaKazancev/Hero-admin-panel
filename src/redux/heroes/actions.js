import { createAction } from '@reduxjs/toolkit';

export const heroesFetching = createAction('HEROES_FETCHING');
export const heroesFetched = createAction('HEROES_FETCHED');
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
export const deleteHero = createAction('DELETE_HERO');
export const createHero = createAction('CREATE_HERO');
