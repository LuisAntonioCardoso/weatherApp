import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = `${process.env.OPEN_WEATHER_MAP_API_KEY}`;

export async function fetchWeatherData(cityId) {
	const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${API_KEY}`;

	const response = await axios.get(url);
	const data = response.data;

	// ! check if data received is complete
	if (!data.list) throw new Error('Invalid weather data received');

	const {main, weather, wind} = data.list[0];
	const name = data.city.name;

	return {
		name,
		temperature: main.temp,
		humidity: main.humidity,
		description: weather[0].main,
		icon: weather[0].icon,
		windSpeed: wind.speed
	};
}
