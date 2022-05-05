import { createSlice } from '@reduxjs/toolkit';
import { sortHeroes } from '../services/functions';

const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
};

const { reducer, actions } = createSlice({
	initialState,
	name: 'heroes',
	reducers: {
		heroesFetching: state => {
			state.heroesLoadingStatus = 'loading';
		},
		heroesFetched: (state, action) => {
			state.heroes = action.payload;
			state.heroesLoadingStatus = 'idle';
		},
		heroesFetchingError: state => {
			state.heroesLoadingStatus = 'error';
		},
		deleteHero: (state, action) => {
			state.heroes = state.heroes.filter(({ id }) => id !== action.payload);
		},
		createHero: (state, action) => ({
			...state,
			heroes: sortHeroes([...state.heroes, action.payload]),
		}),
	},
});

export default reducer;
export const {
	heroesFetching,
	heroesFetched,
	heroesFetchingError,
	deleteHero,
	createHero,
} = actions;
