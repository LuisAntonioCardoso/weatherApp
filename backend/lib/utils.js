import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = `${process.env.OPEN_WEATHER_MAP_API_KEY}`;

<<<<<<< HEAD
export async function fetchWeatherDataById(cityId) {
=======
export async function fetchWeatherData(cityId) {
>>>>>>> c8a56e41110125a68d32eabf82108b2a9f0ea040
	const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${API_KEY}`;

	const response = await axios.get(url);
	const data = response.data;

	// ! check if data received is complete
	if (!data.list) throw new Error('Invalid weather data received');

	const {main, weather, wind} = data.list[0];

	return {
		temperature: kelvinToCelsius(main.temp),
		feelsLike: kelvinToCelsius(main.feels_like),
		pressure: main.pressure,
		humidity: main.humidity,
		description: weather[0].main,
		icon: weather[0].icon,
		windSpeed: wind.speed
	};
}

export async function fetchWeatherDataByCoords(latitude, longitude) {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

	const response = await axios.get(url);
	const data = response.data;

	// ! check if data received is complete
	if (!data) throw new Error('Invalid weather data received');

	const {main, weather, wind} = data;
	return {
		temperature: kelvinToCelsius(main.temp),
		feelsLike: kelvinToCelsius(main.feels_like),
		pressure: main.pressure,
		humidity: main.humidity,
		description: weather[0].main,
		icon: weather[0].icon,
		windSpeed: wind.speed
	};
}

function kelvinToCelsius(value) {
	return (value - 273.15).toFixed(1);
}
