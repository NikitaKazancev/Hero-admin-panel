import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useHeroServer from '../../services/HeroServer';
import { setActiveFilter } from '../../redux/filters/actions';

const HeroesFilters = () => {
	const { filters, activeFilter } = useSelector(state => state.filtersReducer);
	const dispatch = useDispatch();
	const { getFilters } = useHeroServer(dispatch);

	// eslint-disable-next-line
	useEffect(getFilters, []);

	return (
		<div className='card shadow-lg mt-4'>
			<div className='card-body'>
				<p className='card-text'>Отфильтруйте героев по элементам</p>
				<div className='btn-group'>
					{filters.map(({ name, label, styleType }, i) => (
						<button
							key={i}
							className={`btn btn-${styleType} ${
								activeFilter === name ? 'active' : ''
							}`}
							data-name={name}
							onClick={() => dispatch(setActiveFilter(name))}
						>
							{label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default HeroesFilters;
