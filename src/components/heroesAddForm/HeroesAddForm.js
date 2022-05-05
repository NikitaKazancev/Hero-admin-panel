import { useState } from 'react';
import Spinner from '../spinner/Spinner';
import { useCreateHeroMutation } from '../../api/heroesApi';
import { useGetFiltersQuery } from '../../api/filtersApi';

const HeroesAddForm = () => {
	const [createHero] = useCreateHeroMutation();
	const {
		data: filters = [],
		isLoading,
		isError,
		error,
	} = useGetFiltersQuery();

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [element, setElement] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		createHero({ name, description, element }).unwrap();

		setName('');
		setDescription('');
		setElement('');
	};

	const options = elements => {
		if (isLoading) return <Spinner />;
		if (isError) {
			console.log(error);
			return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
		}

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
					{elements.map(({ label, name }, i) => {
						content = label;
						if (name === 'all') content = 'Я владею элементом...';
						return (
							<option
								key={i}
								value={name}
								onClick={e => setElement(e.target.value)}
							>
								{content}
							</option>
						);
					})}
				</select>
			</>
		);
	};

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

			<div className='mb-3'>{options(filters)}</div>

			<button type='submit' className='btn btn-primary'>
				Создать
			</button>
		</form>
	);
};

export default HeroesAddForm;
