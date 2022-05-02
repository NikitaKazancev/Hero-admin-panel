import { useHttp } from '../hooks/http.hook';
import {
	heroesFetched,
	heroesFetchingError,
	heroesFetching,
	deleteHero as deleteHeroAction,
} from '../redux/actions';

const useHeroServer = dispatch => {
	const generalUrl = 'http://localhost:3001/';

	const { request } = useHttp();

	const getHeroes = () => {
		dispatch(heroesFetching());
		request(`${generalUrl}heroes`)
			.then(data => dispatch(heroesFetched(data)))
			.catch(() => dispatch(heroesFetchingError()));
	};

	const deleteHero = id => {
		dispatch(deleteHeroAction(id));
		request(`${generalUrl}heroes/${id}`, 'DELETE');
	};

	return { getHeroes, deleteHero };
};

export default useHeroServer;
