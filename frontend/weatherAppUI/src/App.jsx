import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/WeatherCard';
import {LOCAL_API_URL} from './api';
import {useState} from 'react';

function App() {
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
		<div className='max-w-5xl mx-auto my-5'>
			<Search onSearchChange={handleOnSearchChange} />
			{weatherData && <CurrentWeather data={weatherData} />}
		</div>
	);
}

export default App;

/**~
 * console.log('data: ', searchData);
		fetch(`${LOCAL_NAME_API_URL}/id/${name}`)
			.then(response => response.json())
			.then(response => {
				console.log('name: ', response);
			})
			.catch(error => console.log(error));

 */
