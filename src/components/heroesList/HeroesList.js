import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useGetHeroesQuery, useDeleteHeroMutation } from '../../api/heroesApi';

import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';

const HeroesList = () => {
	const {
		data: heroes = [],
		isError,
		isFetching,
		isLoading,
		error,
	} = useGetHeroesQuery();
	const [deleteHero] = useDeleteHeroMutation();
	const activeFilter = useSelector(state => state.filters.activeFilter);

	const filteredHeroes = useCallback(
		heroes => {
			if (activeFilter === 'all') return heroes;
			return heroes.filter(hero => hero.element === activeFilter);
		},
		[activeFilter]
	);

	if (isLoading || isFetching) {
		return <Spinner />;
	} else if (isError) {
		console.log(error);
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
	}

	const renderHeroesList = arr => {
		if (arr.length === 0) {
			return (
				<CSSTransition timeout={0} classNames='fade-transition'>
					<h5 className='text-center mt-5'>Героев пока нет</h5>
				</CSSTransition>
			);
		}

		return arr.map(({ id, ...props }) => {
			return (
				<CSSTransition
					key={id}
					timeout={500}
					classNames={'fade-transition'}
					mountOnEnter
					unmountOnExit
				>
					<HeroesListItem {...props} deleteHero={() => deleteHero(id)} />
				</CSSTransition>
			);
		});
	};

	const elements = renderHeroesList(filteredHeroes(heroes));
	return <TransitionGroup component='ul'>{elements}</TransitionGroup>;
};

export default HeroesList;
