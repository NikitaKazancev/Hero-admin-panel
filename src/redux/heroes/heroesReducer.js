import { createReducer } from '@reduxjs/toolkit';
import { sortHeroes } from '../../services/functions';
import {
	heroesFetching,
	heroesFetched,
	heroesFetchingError,
	createHero,
	deleteHero,
} from './actions';

const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
};

const heroesReducer = createReducer(initialState, builder => {
	builder
		.addCase(heroesFetching, state => {
			state.heroesLoadingStatus = 'loading';
		})
		.addCase(heroesFetched, (state, action) => {
			state.heroes = action.payload;
			state.heroesLoadingStatus = 'idle';
		})
		.addCase(heroesFetchingError, state => {
			state.heroesLoadingStatus = 'error';
		})
		.addCase(deleteHero, (state, action) => {
			state.heroes = state.heroes.filter(({ id }) => id !== action.payload);
		})
		.addCase(createHero, (state, action) => ({
			...state,
			heroes: sortHeroes([...state.heroes, action.payload]),
		}))
		.addDefaultCase(() => {});
});

export default heroesReducer;
