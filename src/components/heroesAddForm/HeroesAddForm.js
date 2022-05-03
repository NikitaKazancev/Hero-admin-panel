import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';
import useHeroServer from '../../services/HeroServer';
import Spinner from '../spinner/Spinner';

const HeroesAddForm = () => {
	const { createHero, getFilters } = useHeroServer(useDispatch());
	const { filters, filtersLoadingStatus } = useSelector(state => state);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [element, setElement] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		createHero({ name, description, element });

		setName('');
		setDescription('');
		setElement('');
	};

	const options = useCallback(
		(options, status) => {
			if (status === 'loading') return <Spinner />;
			if (status === 'error')
				return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;

			let content;
			return (
				<>
					<label htmlFor='element' className='form-label'>
						Выбрать элемент героя
					</label>

					<select
						required
						className='form-select'
						id='element'
						name='element'
						onChange={e => setElement(e.target.value)}
						value={element}
					>
						{options.map(({ label, name }, i) => {
							content = label;
							if (name === 'all') content = 'Я владею элементом...';
							return (
								<option
									key={i}
									value={name}
									// onClick={e => setElement(e.target.value)}
								>
									{content}
								</option>
							);
						})}
					</select>
				</>
			);
		},
		[filters, filtersLoadingStatus, element]
	);

	useEffect(getFilters, []);

	return (
		<form className='border p-4 shadow-lg rounded' onSubmit={onSubmit}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label fs-4'>
					Имя нового героя
				</label>
				<input
					required
					type='text'
					name='name'
					className='form-control'
					id='name'
					placeholder='Как меня зовут?'
					onChange={e => setName(e.target.value)}
					value={name}
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='text' className='form-label fs-4'>
					Описание
				</label>
				<textarea
					required
					name='text'
					className='form-control'
					id='text'
					placeholder='Что я умею?'
					style={{ height: '130px' }}
					onChange={e => setDescription(e.target.value)}
					value={description}
				/>
			</div>

			<div className='mb-3'>{options(filters, filtersLoadingStatus)}</div>

			<button type='submit' className='btn btn-primary'>
				Создать
			</button>
		</form>
	);
};

export default HeroesAddForm;
