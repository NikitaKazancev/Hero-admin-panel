import { useHttp } from '../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';
import {
	heroesFetched,
	heroesFetchingError,
	heroesFetching,
	deleteHero as deleteHeroAction,
	createHero as createHeroAction,
} from '../redux/heroes/actions';
import {
	filtersFetched,
	filtersFetching,
	filtersFetchingError,
} from '../redux/filters/actions';
import { sortHeroes } from './functions';

const useHeroServer = dispatch => {
	const baseUrl = 'http://localhost:3001/';

	const { request } = useHttp();

	const getHeroes = () => {
		dispatch(heroesFetching);
		request(`${baseUrl}heroes`)
			.then(heroes => dispatch(heroesFetched(sortHeroes(heroes))))
			.catch(() => dispatch(heroesFetchingError));
	};

	const deleteHero = id => {
		dispatch(deleteHeroAction(id));
		request(`${baseUrl}heroes/${id}`, 'DELETE');
	};

	const createHero = hero => {
		const data = { ...hero, id: uuidv4() };
		dispatch(createHeroAction(data));
		request(`${baseUrl}heroes`, 'POST', data);
	};

	const getFilters = () => {
		dispatch(filtersFetching);
		request(`${baseUrl}filters`)
			.then(filters => dispatch(filtersFetched(filters)))
			.catch(() => dispatch(filtersFetchingError));
	};

	return { getHeroes, deleteHero, createHero, getFilters };
};

export default useHeroServer;
