export const GEO_API_URL =
	'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=Q45&minPopulation=100000';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82859e8563mshc9cc46c87c58179p1df695jsn16373146786d',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const LOCAL_API_URL = 'http://localhost:3000/weather';
