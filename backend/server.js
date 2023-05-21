// ! dependencies
import express from 'express';
import NodeCache from 'node-cache';
import cors from 'cors';
import {fetchWeatherDataById, fetchWeatherDataByCoords} from './lib/utils.js';

const app = express();
app.use(cors());
const cache = new NodeCache({stdTTL: 1800});

const validCities = new Map([
	['Lisboa', 2267056],
	['Leiria', 2267094],
	['Coimbra', 2740636],
	['Porto', 2735941],
	['Faro', 2268337]
]);

// ! endpoint
app.get('/weather/id/:cityId', async (request, response) => {
	const city = request.params.cityId;

	// ! validate input
	if (!city)
		return response.status(400).json({error: 'É necessário indicar o parametro cidade.'});

	if (!validCities.has(city))
		return response
			.status(400)
			.json({error: 'Valor introduzido não corresponde a uma cidade válida.'});

	// ! check cache
	const cachedData = cache.get(city);
	if (cachedData) {
		console.log(`Informação sobre ${city} obtida da cache.`);
		return response.json(cachedData);
	}

	// ! OpenWeatherMap API request
	try {
		// ! fetch data
		const weatherData = await fetchWeatherDataById(validCities.get(city));
		// ! cache it
		cache.set(city, weatherData);

		console.log(`Informação sobre ${city} obtida da API OpenWeatherMap.`);
		return response.json(weatherData);
	} catch (error) {
		console.error(`Não foi possivel obter informação sobre o clima para a ${city}.`, error);
		return response.status(500).json({error: 'Erro ao obter informação.'});
	}
});

// ! endpoint
app.get('/weather/coords/:latitude&:longitude', async (request, response) => {
	const latitude = request.params.latitude;
	const longitude = request.params.longitude;

	// ! check cache
	const cachedData = cache.get(latitude.toString() + ' ' + longitude.toString());
	if (cachedData) {
		console.log(`Informação sobre as coordenadas ${latitude}, ${longitude} obtida da cache.`);
		return response.json(cachedData);
	}

	// ! OpenWeatherMap API request
	try {
		// ! fetch data
		const weatherData = await fetchWeatherDataByCoords(latitude, longitude);
		// ! cache it
		cache.set(latitude.toString() + ' ' + longitude.toString(), weatherData);

		console.log(
			`Informação sobre as coordenadas ${latitude}, ${longitude} obtida da API OpenWeatherMap.`
		);
		return response.json(weatherData);
	} catch (error) {
		console.error(
			`Não foi possivel obter informação sobre o clima para as coordenadas ${latitude}, ${longitude}.`,
			error
		);
		return response.status(500).json({error: 'Erro ao obter informação.'});
	}
});

app.listen(3000, () => {
	console.log('server running in port 3000');
});
