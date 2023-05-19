// ! dependencies
import express from 'express';
import {fetchWeatherData} from './lib/utils.js';

const app = express();

const validCities = new Map([
	['Lisboa', 2267056],
	['Leiria', 2267094],
	['Coimbra', 2740636],
	['Porto', 2735941],
	['Faro', 2268337]
]);

// ! endpoint
app.get('/weather/', async (request, response) => {
	const city = 'Lisboa';

	// ! OpenWeatherMap API request
	try {
		const weatherData = await fetchWeatherData(validCities.get(city));

		console.log(`Informação sobre ${city} obtida da API OpenWeatherMap.`);
		return response.json(weatherData);
	} catch (error) {
		console.error(`Não foi possivel obter informação sobre o clima para a ${city}.`, error);
		return response.status(500).json({error: 'Erro ao obter informação.'});
	}
});

app.listen(3000, () => {
	console.log('server running in port 3000');
});
