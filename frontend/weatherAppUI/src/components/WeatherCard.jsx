const WeatherCard = ({data}) => {
	const details = [
		['Feels Like', data.feelsLike + ' °C'],
		['Wind', data.windSpeed + ' m/s'],
		['Humidity', data.humidity + '%'],
		['Pressure', data.pressure + ' hPa']
	];

	return (
		<>
			<div
				title='weather'
				className='p-5 pt-0 mx-auto mt-5 mb-0 border shadow-2xl w-96 rounded-xl text-slate-50 bg-slate-700'
			>
				<div
					title='top'
					className='flex items-center justify-between'
				>
					<div>
						<p
							title='city'
							className='text-lg font-semibold tracking-wide'
						>
							{data.city}
						</p>
						<p
							title='description'
							className='text-sm font-light tracking-wide'
						>
							{data.description}
						</p>
					</div>
					<img
						alt='weather'
						title='image'
						src={`icons/${data.icon}.png`}
						className='w-[100px]'
					/>
				</div>
				<div
					title='bottom'
					className='flex items-center justify-between'
				>
					<p
						title='temp'
						className='w-auto font-semibold tracking-tighter text-7xl'
					>
						{data.temperature}°C
					</p>
					<div
						title='details'
						className='justify-start w-full pl-5'
					>
						<div
							title='param-row'
							className='flex justify-between'
						>
							<span
								title='param-label'
								className='text-lg font-medium text-left'
							>
								Details
							</span>
						</div>
						{details.map(item => (
							<div
								title='param-row'
								className='flex justify-between'
								key={item}
							>
								<span
									title='param-label'
									className='text-xs font-normal text-left'
								>
									{item[0]}
								</span>
								<span
									title='param-value'
									className='text-xs font-medium text-right'
								>
									{item[1]}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherCard;
