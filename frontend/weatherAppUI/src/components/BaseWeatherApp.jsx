import WeatherCard from './WeatherCard';
import {LOCAL_API_URL} from '../api';
import {useState} from 'react';
import Selector from './Selector';

const BaseWeatherApp = () => {
	const [weatherData, setWeatherData] = useState(null);

	const handleOnSelect = value => {
		fetch(`${LOCAL_API_URL}/id/${value}`)
			.then(response => response.json())
			.then(response => {
				setWeatherData({city: value, ...response});
			})
			.catch(error => console.log(error));
	};

	return (
		<div className='p-4'>
			<Selector onSelect={handleOnSelect} />
			{weatherData && <WeatherCard data={weatherData} />}
		</div>
	);
};

export default BaseWeatherApp;
