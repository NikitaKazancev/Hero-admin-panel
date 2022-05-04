import useHeroServer from '../../services/HeroServer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createSelector } from 'reselect';

import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';

const HeroesList = () => {
	const heroesSelector = createSelector(
		state => state.heroesReducer.heroes,
		state => state.filtersReducer.activeFilter,
		(heroes, activeFilter) => {
			if (activeFilter === 'all') return heroes;
			return heroes.filter(hero => hero.element === activeFilter);
		}
	);

	const heroes = useSelector(heroesSelector);
	const heroesLoadingStatus = useSelector(
		state => state.heroesReducer.heroesLoadingStatus
	);

	const { getHeroes, deleteHero } = useHeroServer(useDispatch());

	useEffect(getHeroes, []);

	if (heroesLoadingStatus === 'loading') {
		return <Spinner />;
	} else if (heroesLoadingStatus === 'error') {
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

	const elements = renderHeroesList(heroes);
	return <TransitionGroup component='ul'>{elements}</TransitionGroup>;
};

export default HeroesList;
