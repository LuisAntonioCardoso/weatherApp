import SimpleButton from './SimpleButton';

const cities = ['Lisboa', 'Leiria', 'Coimbra', 'Porto', 'Faro'];

const Selector = ({onSelect}) => {
	const handleOnSelect = value => {
		onSelect(value);
	};

	return (
		<div className='space-x-3'>
			{cities.map(item => (
				<SimpleButton
					key={item}
					label={item}
					onClick={handleOnSelect}
				/>
			))}
		</div>
	);
};

export default Selector;
