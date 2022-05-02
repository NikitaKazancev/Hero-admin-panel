import useHeroServer from '../../services/HeroServer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';

const HeroesList = () => {
	const { heroes, heroesLoadingStatus } = useSelector(state => state);
	const { getHeroes, deleteHero } = useHeroServer(useDispatch());

	useEffect(
		getHeroes,
		// eslint-disable-next-line
		[]
	);

	if (heroesLoadingStatus === 'loading') {
		return <Spinner />;
	} else if (heroesLoadingStatus === 'error') {
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
	}

	const renderHeroesList = arr => {
		if (arr.length === 0) {
			return <h5 className='text-center mt-5'>Героев пока нет</h5>;
		}

		return arr.map(({ id, ...props }) => {
			return (
				<HeroesListItem
					key={id}
					{...props}
					deleteHero={() => deleteHero(id)}
				/>
			);
		});
	};

	const elements = renderHeroesList(heroes);
	return <ul>{elements}</ul>;
};

export default HeroesList;
