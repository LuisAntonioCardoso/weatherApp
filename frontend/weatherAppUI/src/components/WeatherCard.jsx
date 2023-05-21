const WeatherCard = () => {
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
							name
						</p>
						<p
							title='description'
							className='text-sm font-light tracking-wide'
						>
							sunny
						</p>
					</div>
					<img
						alt='weather'
						title='image'
						src='icons/01d.png'
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
						10ºC
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
						<div
							title='param-row'
							className='flex justify-between'
						>
							<span
								title='param-label'
								className='text-xs font-normal text-left'
							>
								Feels like
							</span>
							<span
								title='param-value'
								className='text-xs font-medium text-right'
							>
								22
							</span>
						</div>
						<div
							title='param-row'
							className='flex justify-between'
						>
							<span
								title='param-label'
								className='text-xs font-normal text-left'
							>
								wind
							</span>
							<span
								title='param-value'
								className='text-xs font-medium text-right'
							>
								2 m/s
							</span>
						</div>
						<div
							title='param-row'
							className='flex justify-between'
						>
							<span
								title='param-label'
								className='text-xs font-normal text-left'
							>
								Humidity
							</span>
							<span
								title='param-value'
								className='text-xs font-medium text-right'
							>
								15%
							</span>
						</div>
						<div
							title='param-row'
							className='flex justify-between'
						>
							<span
								title='param-label'
								className='text-xs font-normal text-left'
							>
								Pressure
							</span>
							<span
								title='param-value'
								className='text-xs font-medium text-right'
							>
								15 hPa
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherCard;
