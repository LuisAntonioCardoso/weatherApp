const SimpleButton = ({label, onClick}) => {
	return (
		<button
			className='w-24 py-2 font-bold text-white border-2 border-white rounded bg-slate-700 hover:bg-blue-700'
			onClick={() => onClick(label)}
		>
			{label}
		</button>
	);
};

export default SimpleButton;
