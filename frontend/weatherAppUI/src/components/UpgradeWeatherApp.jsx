import Search from './Search';
import WeatherCard from './WeatherCard';
import {LOCAL_API_URL} from '../api';
import {useState} from 'react';

const UpgradeWeatherApp = () => {
	const [weatherData, setWeatherData] = useState(null);

	const handleOnSearchChange = searchData => {
		const [lat, lon] = searchData.value.split(' ');

		fetch(`${LOCAL_API_URL}/coords/${lat}&${lon}`)
			.then(response => response.json())
			.then(response => {
				setWeatherData({city: searchData.label, ...response});
			})
			.catch(error => console.log(error));
	};

	return (
		<div className='p-4'>
			<Search onSearchChange={handleOnSearchChange} />
			{weatherData && <WeatherCard data={weatherData} />}
		</div>
	);
};

export default UpgradeWeatherApp;
