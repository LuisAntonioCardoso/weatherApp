// ! dependencies
import express from 'express';

const app = express();

// ! endpoint
app.get('/', async (request, response) => {
	response.send('hello world');
});

app.listen(3000, () => {
	console.log('server running in port 3000');
});
