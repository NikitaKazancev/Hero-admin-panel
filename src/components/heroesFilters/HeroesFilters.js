import { useSelector, useDispatch } from 'react-redux';
import { setActiveFilter } from '../../redux/filters';
import { useGetFiltersQuery } from '../../api/filtersApi';

const HeroesFilters = () => {
	const activeFilter = useSelector(state => state.filters.activeFilter);
	const dispatch = useDispatch();

	const { data: filters = [] } = useGetFiltersQuery();

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
