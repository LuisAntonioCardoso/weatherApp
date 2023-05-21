import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/WeatherCard';

function App() {
	const handleOnSearchChange = searchData => {
		console.log(searchData);
	};

	return (
		<div className='max-w-5xl mx-auto my-5'>
			<Search onSearchChange={handleOnSearchChange} />
			<CurrentWeather />
		</div>
	);
}

export default App;
