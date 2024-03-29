import './spinner.scss';

const Spinner = () => {
	return (
		<div className='spinner-wrapper'>
			<div className='spinner-border mx-auto mt-5' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		</div>
	);
};

export default Spinner;
